const mongoose = require("mongoose");
const Assistance = require("../models/Assistance");
const Schedule = require("../models/Schedule");

exports.createAssistance = async (req, res) => {
  const ass = {
    code: "FIN",
    name: "Alfin Maghfiroh",
    username: "alfinma"
  };
  const assistance = await new Assistance(ass).save();
  res.json(assistance);
};
