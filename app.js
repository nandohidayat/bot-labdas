const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const helpers = require("./helpers");
const errorHandlers = require("./handlers/errorHandler");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => {
  console.error(`${err.message}`);
});

require("./models/Assistance");
require("./models/Schedule");

require("./bot").launch();

const indexRoute = require("./routes/indexRoute");

app.use("/", indexRoute);
app.use(errorHandlers.notFound);
if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors);
}

app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running on port ${server.address().port}`);
});
