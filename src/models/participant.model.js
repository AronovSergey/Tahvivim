const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	activity: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
});
participantSchema.index({ user: 1, activity: 1 }, { unique: true });
const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;
