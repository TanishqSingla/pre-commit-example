const express = require("express");

const app = express();

app.get("/", (_, res) => {
	res.send("Hello world");
});

app.listen(3000, () =>
	console.log("server is running on http://127.0.0.1:3000"),
);
