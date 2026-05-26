const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("App running on 3000.");
});

app.post("/signup", async (req, res) => {
	const newUser = req.body;

	const user = new User(newUser);

	try {
		await user.save();
		res.status(201).send("User created successfully.");
	}catch(err) {
		res.status(400).send("Error saving User:", err.message);
	}
});

connectDB()
	.then(() => {
		console.log("Database connection successfull.")
		app.listen(5000, () => {
			console.log("Listening on port 5000.");
		});
	})
	.catch((err) => {
		console.error("Database connection cannot be established..");
	});
