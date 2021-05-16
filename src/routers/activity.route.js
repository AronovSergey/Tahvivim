const express = require("express");
const auth = require("../middleware/auth");
const activityControler = require("../controllers/activity.controller");
const router = express.Router();

router
	.get("/", activityControler.getAllActivities)
	.get("/my", auth, activityControler.getAllMyActivities)
	.get("/:id", auth, activityControler.getActivity)
	.post("/", auth, activityControler.createActivity)
	.put("/:id", activityControler.updateActivity)
	.delete("/:id", auth, activityControler.deleteActivity);

module.exports = router;
