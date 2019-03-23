const Telegraf = require("telegraf");
const schedule = require("node-schedule");
const mongoose = require("mongoose");
const Schedule = require("./models/Schedule");

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

const second = schedule.scheduleJob("48 0 ? * 0", async () => {
  const day = new Date().getDay();
  const sch = await Schedule.find({ day, hour: 0, minute: 50 });
  if (sch) {
    const job1 = bot.telegram.sendMessage(
      -352077074,
      `@${sch[0].assistances[0].assistance.username}`
    );
  }
});

module.exports = bot;
