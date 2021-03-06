const sharp = require("sharp");
const UserModel = require("../models/user.model");
const ActivitiesModel = require("../models/activity.model");

exports.getMyProfile = async (req, res) => {
	res.send(req.user);
};

exports.getProfile = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);

		res.status(200).json(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

exports.signin = async (req, res) => {
	const user = new UserModel(req.body);
	try {
		await user.save();
		const token = await user.generateAuthToken();
		res.status(201).send({ user, token });
	} catch (error) {
		res.status(400).send(error.message);
	}
};

exports.login = async (req, res) => {
	try {
		const user = await UserModel.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.logout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});

		await req.user.save();

		res.send("You have been logged out");
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.logoutAllDevices = async (req, res) => {
	try {
		req.user.tokens = [];

		await req.user.save();

		res.send("You have been logged out in all devices");
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.updateMyProfile = async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "email", "password", "age"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		updates.forEach((update) => (req.user[update] = req.body[update]));
		await req.user.save();

		res.send(req.user);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.removeMyProfile = async (req, res) => {
	try {
		await req.user.remove();
		res.send(req.user);
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.uploadAvatar = async (req, res) => {
	const buffer = await sharp(req.file.buffer)
		.resize({ width: 250, height: 250 })
		.png()
		.toBuffer();
	req.user.avatar = buffer;
	await req.user.save();
	res.send("Avatar has been successfully uploaded");
};

exports.deleteAvatar = async (req, res) => {
	req.user.avatar = undefined;
	await req.user.save();
	res.send("Avatar has been successfully deleted");
};

exports.getAvatar = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		if (!user || !user.avatar) {
			throw new Error();
		}

		res.set("Content-Type", "image/png");
		res.send(user.avatar);
	} catch (e) {
		res.status(404).send();
	}
};

exports.errorHandler = (error, req, res, next) => {
	res.status(400).send({ error: error.message });
};

exports.addToFavorites = async (req, res) => {
	const { id } = req.body;
	try {
		if (!req.user.favorites.includes(id))
			await req.user.updateOne({ $push: { favorites: id } });

		const user = await UserModel.findById(req.user._id);

		res.status(200).json(user);
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.removeFromFavorites = async (req, res) => {
	const { id } = req.body;
	try {
		if (req.user.favorites.includes(id))
			await req.user.updateOne({ $pull: { favorites: id } });

		const user = await UserModel.findById(req.user._id);

		res.status(200).json(user);
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.getAllFavorites = async (req, res) => {
	try {
		const favorites = req.user.favorites;
		const favoritesArrayOfObjects = await ActivitiesModel.find({
			_id: { $in: favorites },
		});
		res.status(200).json(favoritesArrayOfObjects);
	} catch (error) {
		res.status(404).send(error);
	}
};
