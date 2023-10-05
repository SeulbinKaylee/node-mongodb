const express = require("express");
const mongoose = require("mongoose");
const server = express();
const User = require("./models/User");
require("dotenv").config({ path: "variables.env" });

server.get("/", (req, res) => {
  const newUser = new User();
  newUser.email = "seulbinkaylee@gmail.com";
  newUser.name = "구슬빈짱";
  newUser.age = 50;
  newUser
    .save()
    .then((user) => {
      console.log(user);
      res.json({ message: "User Created Succesfully" });
    })
    .catch((err) => {
      res.json({ message: "User was not Succesfully created" });
    });
});
server.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  } else {
    mongoose
      .connect(process.env.MONGOODB_URL)
      .then(() => {
        console.log("Connected to database successfully");
      })
      .catch((error) => {
        console.error("MongoDB 연결 실패:", error);
      });
  }
});
