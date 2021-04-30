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

module.exports = app;
