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
  // console.log(ctx.message);
});

bot.catch(err => {
  console.log(`Oops ${err}`);
});

const jobs = [];

jobs[0] = schedule.scheduleJob("30 6 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 7, 0);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 07.00 ngasist di lab ${sch.lab}`
      );
    });
  }
});

jobs[1] = schedule.scheduleJob("10 8 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 8, 40);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 08.40 ngasist di lab ${sch.lab}`
      );
    });
  }
});

jobs[2] = schedule.scheduleJob("50 9 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 10, 20);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 10.20 ngasist di lab ${sch.lab}`
      );
    });
  }
});

jobs[3] = schedule.scheduleJob("0 12 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 12, 30);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 12.30 ngasist di lab ${sch.lab}`
      );
    });
  }
});

jobs[4] = schedule.scheduleJob("40 13 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 14, 10);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 14.10 ngasist di lab ${sch.lab}`
      );
    });
  }
});

jobs[5] = schedule.scheduleJob("50 15 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 16, 20);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 16.20 ngasist di lab ${sch.lab}`
      );
    });
  }
});

jobs[6] = schedule.scheduleJob("0 18 ? * 1-5", async () => {
  const day = new Date().getDay();
  try {
    const schedules = await Schedule.getCurrent(day, 18, 30);
  } catch (e) {
    console.log(e);
  }
  if (schedules) {
    schedules.map(sch => {
      bot.telegram.sendMessage(
        -1001206258793,
        `@${sch.username[0]}, @${sch.username[1]}, @${
          sch.username[2]
        } 18.30 ngasist di lab ${sch.lab}`
      );
    });
  }
});

// bot.telegram.leaveChat(-1001206258793);
// bot.telegram.leaveChat(-352077074);

module.exports = bot;
