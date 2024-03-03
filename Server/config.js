const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function (app) {
  mongoose
    .connect(`${process.env.MONGODB_URL}`, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to projectdb"));
};
