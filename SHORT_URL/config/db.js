const mongoose = require("mongoose");

async function connectionDB() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Mongo error: " + err));
}

module.exports = { connectionDB };
