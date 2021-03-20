"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const posts = require("./routes/postRoutes");

// initiate express
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "client", "build")));

// set up routes
app.use("https://my-personal-blo.herokuapp.com//posts", posts);

// set up the port
const PORT = process.env.PORT || 5000;
console.log("starting server");
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

try {
  // set up mongoose
  console.log("connecting to MongoDB ");
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected ");
  });
} catch (err) {
  console.error(err);
}
