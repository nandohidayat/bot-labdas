const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const assistanceSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    trim: true,
    uppercase: true
  },
  name: {
    type: String,
    trim: true
  },
  username: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Assistance", assistanceSchema);
