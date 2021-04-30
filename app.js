const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Express Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/api/getUser", (req, res) => {
	const user = "Evgeni";
	res.json(user);
});

//Connect to db with mongoose
mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("Database connect");
	});

if (process.env.NODE_ENV === "production") {
	// Exprees will serve up production assets
	app.use(express.static("client/build"));

	// Express serve up index.html file if it doesn't recognize route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

module.exports = app;
