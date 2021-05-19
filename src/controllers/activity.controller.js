const ActivityModel = require("../models/activity.model");
const ParticipantModel = require("../models/participant.model");

exports.getAllActivities = async (req, res) => {
	const match = {};

	if (req.query.category !== "undefined") {
		match.category = req.query.category;
		if (req.query.subcategory !== "undefined") {
			match.subcategory = req.query.subcategory;
		}
	}

	try {
		let activities = await ActivityModel.find(match);
		activities = activities.filter((activity) =>
			activity.title.toLowerCase().includes(req.query.term.toLowerCase())
		);
		res.send(activities);
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.getAllMyActivities = async (req, res) => {
	const match = {};
	if (req.query.completed) {
		match.completed = req.query.completed === "true";
	}
	try {
		await req.user.populate({ path: "activities", match }).execPopulate();
		res.send(req.user.activities);
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.getActivity = async (req, res) => {
	const _id = req.params.id;

	try {
		const activity = await ActivityModel.findOne({
			_id,
			owner: req.user._id,
		});

		if (!activity) {
			res.status(404).send("Activity is not found");
		}

		res.send(activity);
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.createActivity = async (req, res) => {
	const activity = new ActivityModel({
		...req.body,
		owner: req.user._id,
		ownerName: req.user.name,
		participants: [req.user],
	});

	try {
		await activity.save();

		const participant = new ParticipantModel({
			user: req.user._id,
			activity: activity._id,
		});
		await participant.save();

		res.status(201).send(activity);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.updateActivity = async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = [
		"_id",
		"title",
		"owner",
		"address",
		"description",
		"address.city",
		"address.address",
		"completed",
		"places",
		"date",
		"createdAt",
		"category",
		"subcategory",
	];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid updates!" });
	}
	try {
		const activity = await ActivityModel.findOne({
			_id: req.params.id,
			owner: req.body.owner,
		});

		if (!activity) {
			return res.status(404).send("Activity is not found");
		}

		updates.forEach((update) => (activity[update] = req.body[update]));
		await activity.save();
		res.send(activity);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.deleteActivity = async (req, res) => {
	try {
		const activity = await ActivityModel.findOneAndDelete({
			_id: req.params.id,
			owner: req.user._id,
		});

		if (!activity) {
			res.status(404).send("Activity is not found");
		}

		res.send(activity);
	} catch (error) {
		res.status(500).send();
	}
};
