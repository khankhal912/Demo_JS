const mongoose = require("mongoose");

async function connectDB() {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Mongo error: " + err));
}

module.exports = { connectDB };
