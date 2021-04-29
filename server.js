const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.get("/api/getUser", (req, res) => {
	const user = "Evgeni";
	res.json(user);
});

const port = 8000;

//Connect to db with mongoose
const uri =
	"mongodb+srv://sergey:1234@appleseeds.yk0bc.mongodb.net/Tahvivim?retryWrites=true&w=majority";
mongoose
	.connect(uri, {
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
app.listen(process.env.PORT || port, () => {
	console.log(`Server started on port ${port}`);
});
