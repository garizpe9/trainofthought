const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/journalentrylist");

// const journalSeed = [
//   {
//     header: "Hello World",
//     entry: "admin",
//     date: new Date(Date.now())
//   },

// ];

const journalSeed = [
  {
  intention: "hello?",
  nurture: "hello?",
  love1: "hello?",
  love2: "hello?",
  love3: "hello?",
  well1: "hello?",
  well2: "hello?",
  well3: "hello?",
  notWell: "hello?",
  vent: "hello?",
  date: new Date(Date.now())
  },

];

// const userSeed = [
//   {
//     username: "username",
//     password: "password",
//   },

// ];

db.Journal.remove({})
  .then(() => db.Journal.collection.insertMany(journalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // db.AUser.insertMany(userSeed)
  
  // .then(data => {
  //   console.log(data.result.n + " records inserted!");
  //   process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });
