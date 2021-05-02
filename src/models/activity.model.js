const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		address: {
			city: {
				type: String,
				required: true,
			},
			address: {
				type: String,
			},
		},
		completed: {
			type: Boolean,
			default: false,
		},
		places: {
			type: Number,
			required: true,
			validate(value) {
				if (value < 0) {
					throw new Error("Places must be a postive number");
				}
			},
		},
		participants: {
			type: Number,
			required: true,
			default: 0,
			validate(value) {
				if (value < 0) {
					throw new Error("Participants must be a postive number");
				}
			},
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
