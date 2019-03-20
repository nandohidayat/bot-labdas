const Telegraf = require("telegraf");

require("dotenv").config({ path: "variables.env" });

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`Respone time ${ms}`);
});

bot.catch(err => {
  console.log(`Oops ${err}`);
});
bot.start(ctx => ctx.reply(42 / 0));

bot.on("text", ctx => ctx.reply("Hello worldAAAA"));

bot.launch();
