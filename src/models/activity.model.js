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
		date: {
			type: Date,
			min: "2021-05-10",
		},
		category: {
			type: String,
			required: true,
		},
		subcategory: {
			type: String,
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
			type: Array,
			deafult: [],
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		ownerName: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
