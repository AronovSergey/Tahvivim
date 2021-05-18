const express = require("express");
const auth = require("../middleware/auth");
const participantControler = require("../controllers/participant.controller");
const router = express.Router();

router
	.post("/", auth, participantControler.newParticipant)
	.delete("/", auth, participantControler.removeParticipant)
	.get("/", auth, participantControler.getAllParticipants);

module.exports = router;
