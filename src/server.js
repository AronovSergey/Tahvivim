const app = require("./app");
const path = require("path");

const port = process.env.PORT;

app.listen(process.env.PORT || port, () => {
	console.log(`Server started on port ${port}`);
});
