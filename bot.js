const Telegraf = require("telegraf");
const schedule = require("node-schedule");
const mongoose = require("mongoose");
const Schedule = mongoose.model("Schedule");

const bot = new Telegraf(process.env.BOT_TOKEN, {
  username: process.env.BOT_USERNAME
});

bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`Respone time ${ms}`);
});

bot.catch(err => {
  console.log(`Oops ${err}`);
});

const jobs = [];

jobs[0] = schedule.scheduleJob("30 6 ? * 1-5", async () => {
  const day = new Date().getDay();
  const schedules = await Schedule.find({ day, hour: 0, minute: 50 });
  if (schedules) {
    schedules.map(sch => {});
  }
});

// bot.telegram.leaveChat(-1001206258793);

module.exports = bot;
