const Telegraf = require("telegraf");
require("dotenv").config({ path: "variables.env" });

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

bot.launch();
