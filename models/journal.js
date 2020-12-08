const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const journalSchema = new Schema({
//   header: { type: String, required: true },
//   entry: { type: String, required: true },
//   date: { type: Date, default: Date.now }
// });

const journalSchema = new Schema({
  intention: String,
  nurture: String,
  love1: String,
  love2: String,
  love3: String,
  well1: String,
  well2: String,
  well3: String,
  notWell: String,
  vent: String,
  date: { type: Date, default: Date.now }
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
