const mongoose = require("mongoose");
const Assistance = require("../models/Assistance");
const Schedule = require("../models/Schedule");

exports.createAssistance = async (req, res) => {
  // const ass = {
  //   code: "FIN",
  //   name: "Alfin Maghfiroh",
  //   username: "alfinma"
  // };
  // const sch = {
  //   day: 0,
  //   hour: 0,
  //   minute: 0,
  //   lab: "H",
  //   assistances: [
  //     {
  //       assistance: "5c95ef26d70dc4284c86daa0"
  //     },
  //     {
  //       assistance: "5c95f136a1e00129748148f6"
  //     }
  //   ]
  // };
  // const assistance = await new Assistance(ass).save();
  // const schedule = await new Schedule(sch).save();
  const schedule = await Schedule.getCurrent(0, 0, 50);
  res.json(schedule);
};
