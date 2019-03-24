const mongoose = require("mongoose");
const Assistance = mongoose.model("Assistance");
const Schedule = mongoose.model("Schedule");

exports.index = async (req, res) => {
  const assPromise = Assistance.find().sort({ code: 1 });
  const schPromise = Schedule.find().sort({
    day: 1,
    hour: 1,
    minute: 1,
    lab: 1
  });
  const [ass, sch] = await Promise.all([assPromise, schPromise]);
  res.render("index", { ass, sch });
};

exports.inputAss = (req, res) => {
  res.render("input-ass");
};

exports.createAss = async (req, res) => {
  req.body.name = req.body.name.toLowerCase().replace(/\b./g, function(a) {
    return a.toUpperCase();
  });
  const ass = await new Assistance(req.body).save();
};

exports.inputSch = async (req, res) => {
  const ass = await Assistance.find().sort({ code: 1 });
  res.render("input-sch", { ass });
};

exports.createSch = async (req, res) => {
  req.body.hour = req.body.time.split(":")[0];
  req.body.minute = req.body.time.split(":")[1];
  const sch = await new Schedule(req.body).save();
  res.json(sch);
};

exports.deleteSch = async (req, res) => {
  const ass = await Schedule.findByIdAndRemove(req.params.id);
  res.json(ass);
};
