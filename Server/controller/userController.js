const mongoose = require("mongoose");
const user = require("../models/user");

const createUser = async (req, res) => {
  let username = await user
    .find({
      username: req.body.username,
    })
    .exec();
  if (username) {
    return res.status(400).send("Username already registered");
  }
  ////////////////////////////////////////////
  let email = await email
    .find({
      email: req.body.email,
    })
    .exec();
  if (email) {
    return res.status(400).send("Email already registered");
  }
  
};

modules.export = [createUser];
