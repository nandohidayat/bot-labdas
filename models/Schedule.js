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
  assistances: [
    {
      assistance: {
        type: mongoose.Schema.ObjectId,
        ref: "Assistance"
      },
      status: {
        type: Boolean,
        default: false
      }
    }
  ]
});

scheduleSchema.statics.getCurrent = function(day, hour, minute) {
  return this.aggregate([
    {
      $lookup: {
        from: "assistances",
        localField: "assistances.assistance",
        foreignField: "_id",
        as: "assistances"
      }
    },
    {
      $match: { day, hour, minute }
    },
    {
      $project: { lab: 1, username: "$assistances.username" }
    }
  ]);
};

function autopopulate(next) {
  this.populate("assistances.assistance");
  next();
}

scheduleSchema.pre("find", autopopulate);
scheduleSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Schedule", scheduleSchema);
