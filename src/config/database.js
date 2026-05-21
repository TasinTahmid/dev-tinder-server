const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://root:root@cluster0.k4g7zoe.mongodb.net/devTinder");
}

module.exports = connectDB;