const request = require("supertest");
const app = require("../src/app");
const UserModel = require("../src/models/user.model");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should signup a new user", async () => {
	const response = await request(app)
		.post("/api/users/signin")
		.send({
			name: "Sergey",
			email: "sergey@gmail.com",
			password: "Aa123456",
		})
		.expect(201);

	// Assert that the database was changed correctly
	const user = await UserModel.findById(response.body.user._id);
	expect(user).not.toBeNull();

	// Assert that the database was changed correctly
	expect(response.body).toMatchObject({
		user: { name: "Sergey", email: "sergey@gmail.com" },
		token: user.tokens[0].token,
	});
	expect(user.password).not.toBe("Aa123456");
});

test("Should login existing user", async () => {
	const response = await request(app)
		.post("/api/users/login")
		.send({
			email: userOne.email,
			password: userOne.password,
		})
		.expect(200);

	const user = await UserModel.findById(userOneId);

	expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should not login nonexistent user", async () => {
	await request(app)
		.post("/api/users/login")
		.send({
			email: userOne.email,
			password: "some wrong password",
		})
		.expect(400);
});

test("Should get profile for user", async () => {
	await request(app)
		.get("/api/users")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
	await request(app)
		.get("/api/users")
		.set("Authorization", `Some wrong token`)
		.send()
		.expect(401);
});

test("Should delete account for user", async () => {
	await request(app)
		.delete("/api/users")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	const user = await UserModel.findById(userOneId);

	expect(user).toBeNull();
});

test("Should not delete account for unauthenticate user", async () => {
	await request(app).delete("/api/users").send().expect(401);
});

test("Should upload avatar image", async () => {
	await request(app)
		.post("/api/users/avatar")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.attach("avatar", "tests/fixtures/profile-pic.jpg")
		.expect(200);
	const user = await UserModel.findById(userOneId);
	expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should update valid user fields", async () => {
	await request(app)
		.put("/api/users")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send({
			name: "Jess",
		})
		.expect(200);
	const user = await UserModel.findById(userOneId);
	expect(user.name).toEqual("Jess");
});

test("Should not update invalid user fields", async () => {
	await request(app)
		.put("/api/users")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send({
			location: "Philadelphia",
		})
		.expect(400);
});
