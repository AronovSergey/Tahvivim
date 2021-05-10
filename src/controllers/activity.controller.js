const ActivityModel = require("../models/activity.model");

exports.getAllActivities = async (req, res) => {
	try {
		const activities = await ActivityModel.find({});
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
	});

	try {
		await activity.save();
		res.status(201).send(activity);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.updateActivity = async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = [
		"title",
		"description",
		"address.city",
		"address.address",
		"completed",
		"places",
		"participants",
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
			owner: req.user._id,
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
