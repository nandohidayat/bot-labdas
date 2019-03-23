const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const scheduleSchema = new mongoose.Schema({
  day: Number,
  hour: Number,
  minute: Number,
  lab: {
    type: String,
    trim: true
  },
  assistance: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Assistance"
    }
  ]
});

function autopopulate(next) {
  this.populate("assistance");
  next();
}

scheduleSchema.pre("find", autopopulate);
scheduleSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Schedule", scheduleSchema);
