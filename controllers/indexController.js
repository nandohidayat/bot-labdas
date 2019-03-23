const mongoose = require("mongoose");
const Assistance = mongoose.model("Assistance");
const Schedule = mongoose.model("Schedule");

exports.inputAss = (req, res) => {
  res.render("input-ass");
};

exports.createAss = async (req, res) => {
  req.body.name = req.body.name.toLowerCase().replace(/\b./g, function(a) {
    return a.toUpperCase();
  });
  const ass = await new Assistance(req.body).save();
  res.redirect("back");
};
