const app = require("../src/app");
const mongoose = require("mongoose");
const UserModel = require("../src/models/user.model");
const ActivityModel = require("../src/models/activity.model");

const userOneId = new mongoose.Types.ObjectId();
const userTwoId = new mongoose.Types.ObjectId();
const userThreeId = new mongoose.Types.ObjectId();

const users = [
	{
		_id: userOneId,
		name: "Sergey Aronov",
		email: "sergey@gmail.com",
		password: "12345678",
		age: 28,
	},
	{
		_id: userTwoId,
		name: "Shir Admon",
		email: "shir@gmail.com",
		password: "12345678",
		age: 24,
	},
	{
		_id: userThreeId,
		name: "Dima Krepak",
		email: "dima@gmail.com",
		password: "12345678",
		age: 23,
	},
];

const activities = [
	{
		title: "Running Group",
		description:
			"If you always run by yourself, you're missing out on the many benefits of group training. Running with a group not only helps to expand your social circle, but it also boosts motivation and can improve your athletic performance.",
		places: 4,
		participants: 2,
		address: {
			city: "Ashdod",
		},
		owner: userOneId,
	},
	{
		title: "Drummer and singer needed for new covers band",
		description:
			"Hi, we are a bassist and two guitarists (in 30s and 40s) looking for a drummer and singer to join us and start a new covers band.",
		places: 1,
		participants: 0,
		address: {
			city: "Ashdod",
		},
		completed: true,
		owner: userOneId,
	},
];

const start = async () => {
	await UserModel.deleteMany();
	await ActivityModel.deleteMany();

	users.forEach(async (user) => {
		await new UserModel(user).save();
	});

	activities.forEach(async (activity) => {
		await new ActivityModel(activity).save();
	});
};

start().then(() => {
	console.log("Mongo DB has reset successfully");
});
