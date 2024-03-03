const mongoose = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  carBrand: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: true,
  },

  carModel: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: true,
  },
  carHp: {
    type: Number,
    min: 1,
    max: 2000,
    required: true,
  },
  carNm: {
    type: Number,
    min: 1,
    max: 2000,
    required: true,
  },
  email: {
    type: String,
    minLength: 1,
    maxLength: 320,
    required: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  username: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 1000,
    required: true,
  },
});

modules.export = mongoose.model("user", userSchema);
