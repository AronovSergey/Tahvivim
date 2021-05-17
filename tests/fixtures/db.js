const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const UserModel = require("../../src/models/user.model");
const ActivityModel = require("../../src/models/activity.model");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
	_id: userOneId,
	name: "Mike",
	email: "Mike@gmail.com",
	password: "Aa123456",
	tokens: [
		{
			token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
		},
	],
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
	_id: userTwoId,
	name: "Jess",
	email: "Jess@gmail.com",
	password: "jessss123!",
	tokens: [
		{
			token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
		},
	],
};

const activityOne = {
	_id: new mongoose.Types.ObjectId(),
	title: "Running Group",
	description:
		"If you always run by yourself, you're missing out on the many benefits of group training. Running with a group not only helps to expand your social circle, but it also boosts motivation and can improve your athletic performance.",
	places: 4,
	participants: 2,
	category: "Sport And Camping",
	address: {
		city: "Ashdod",
	},
	owner: userOneId,
	ownerName: userOne.name,
};

const activityTwo = {
	_id: new mongoose.Types.ObjectId(),
	title: "Drummer and singer needed for new covers band",
	description:
		"Hi, we are a bassist and two guitarists (in 30s and 40s) looking for a drummer and singer to join us and start a new covers band.",
	places: 1,
	participants: 0,
	category: "Music",
	address: {
		city: "Ashdod",
	},
	completed: true,
	owner: userOneId,
	ownerName: userOne.name,
};

const activityThree = {
	_id: new mongoose.Types.ObjectId(),
	title: "Join A Band",
	description:
		"We need an Ozzy (female or male vocalist) to join our Black Sabbath covers band.",
	places: 4,
	participants: 0,
	category: "Music",
	address: {
		city: "Ashdod",
	},
	owner: userTwoId,
	ownerName: userTwo.name,
};

const setupDatabase = async () => {
	await UserModel.deleteMany();
	await ActivityModel.deleteMany();
	await new UserModel(userOne).save();
	await new UserModel(userTwo).save();
	await new ActivityModel(activityOne).save();
	await new ActivityModel(activityTwo).save();
	await new ActivityModel(activityThree).save();
};

module.exports = {
	userOneId,
	userOne,
	userTwoId,
	userTwo,
	activityOne,
	activityTwo,
	activityThree,
	setupDatabase,
};
