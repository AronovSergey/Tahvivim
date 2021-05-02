const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ActivityModel = require("./activity.model");

const userSchema = mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Email is invalid");
				}
			},
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 7,
			validate(value) {
				if (value.toLowerCase().includes("password")) {
					throw new Error('Password cannot contain "password"');
				}
			},
		},
		age: {
			type: Number,
			default: 0,
			validate(value) {
				if (value < 0) {
					throw new Error("Age must be a postive number");
				}
			},
		},
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
		avatar: {
			type: Buffer,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.virtual("activities", {
	ref: "Activity",
	localField: "_id",
	foreignField: "owner",
});

userSchema.methods.toJSON = function () {
	const userObject = this.toObject();

	delete userObject.password;
	delete userObject.tokens;
	delete userObject.avatar;

	return userObject;
};

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign(
		{ _id: user._id.toString() },
		process.env.JWT_SECRET
	);

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await userModel.findOne({ email });

	if (!user) {
		throw new Error("unable to login");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("unable to login");
	}

	return user;
};

// Hash the plain text password before saving
userSchema.pre("save", async function (next) {
	const user = this;

	if (!user.isModified("password")) return next();

	user.password = await bcrypt.hash(user.password, 8);

	next();
});

// Delete user activities when user is removed
userSchema.pre("remove", async function (next) {
	const user = this;
	await ActivityModel.deleteMany({ owner: user._id });
	next();
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
