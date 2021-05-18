const UserModel = require("../models/user.model");
const ActivitiesModel = require("../models/activity.model");
const ParticipantModel = require("../models/participant.model");

exports.newParticipant = async (req, res) => {
	const participant = new ParticipantModel({
		user: req.user._id,
		activity: req.body.activity,
	});

	try {
		await participant.save();

		await ActivitiesModel.findOneAndUpdate(
			{ _id: req.body.activity },
			{ $push: { participants: req.user } }
		);

		res.status(201).send(participant);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.removeParticipant = async (req, res) => {
	try {
		const participant = await ParticipantModel.findOneAndDelete({
			activity: req.body.activity,
			user: req.user._id,
		});

		if (!participant) {
			res.status(404).send("Participant is not found");
		}

		await ActivitiesModel.findOneAndUpdate(
			{ _id: req.body.activity },
			{ $pull: { participants: req.user } }
		);

		res.send(participant);
	} catch (error) {
		res.status(500).send();
	}
};

exports.getAllParticipants = async (req, res) => {
	try {
		const participants = await ParticipantModel.find({
			user: req.user._id,
		});

		const listOfActivitesId = await participants.map(
			(participant) => participant.activity
		);

		const activities = await ActivitiesModel.find({
			_id: { $in: listOfActivitesId },
		});

		res.status(200).json(activities);
	} catch (error) {
		res.status(404).send(error);
	}
};
