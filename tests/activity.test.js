const request = require("supertest");
const app = require("../src/app");
const ActivityModel = require("../src/models/activity.model");
const {
	userOneId,
	userOne,
	userTwoId,
	userTwo,
	activityOne,
	activityTwo,
	activityThree,
	setupDatabase,
} = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should create activity for user", async () => {
	const response = await request(app)
		.post("/api/activities")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send({
			title: "Drummer and singer needed for new covers band",
			description:
				"Hi, we are a bassist and two guitarists (in 30s and 40s) looking for a drummer and singer to join us and start a new covers band.",
			category: "Music",
			address: {
				city: "Ashdod",
			},
			places: 1,
		})
		.expect(201);

	const activity = await ActivityModel.findById(response.body._id);
	expect(activity).not.toBeNull();

	expect(activity.title).toBe(
		"Drummer and singer needed for new covers band"
	);

	expect(activity.participants).toBe(0);

	expect(activity.completed).toBe(false);
});

test("Should fetch user activities", async () => {
	const response = await request(app)
		.get("/api/activities/my")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);
	expect(response.body.length).toBe(2);
});

test("Should delete user task", async () => {
	const response = await request(app)
		.delete(`/api/activities/${activityOne._id}`)
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	const activity = await ActivityModel.findById(activityOne._id);
	expect(activity).toBeNull();
});

test("Should not delete other users activities", async () => {
	const response = await request(app)
		.delete(`/api/activities/${activityOne._id}`)
		.set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
		.send()
		.expect(404);

	const activity = await ActivityModel.findById(activityOne._id);
	expect(activity).not.toBeNull();
});
