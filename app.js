const express = require("express");
const mongoose = require("mongoose");
const indexRoute = require("./routes/indexRoute");
const errorHandlers = require("./handlers/errorHandler");
const app = express();

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => {
  console.error(`${err.message}`);
});

require("./models/Assistance");
require("./models/Schedule");

require("./bot").launch();

app.use("/", indexRoute);
app.use(errorHandlers.notFound);
if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors);
}

app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running on port ${server.address().port}`);
});
