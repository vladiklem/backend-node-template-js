const path = require("path");

const router = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(process.cwd(), "/public/index.html"));
	});
};

module.exports = router;
