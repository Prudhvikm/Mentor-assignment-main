const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const studentRoute = require("./routes/studentRoutes");
const mentorRoute = require("./routes/mentorRoutes");

const app = express();
const PORT = process.env.PORT;

//inbuilt middleware
app.use(express.json());
app.use(cors());

//Defalut endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Student/Mentor assignment tool");
});

//Mongoose DB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose is connected");
    app.listen(PORT, () => console.log("Server started on port", PORT));
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.use("/students", studentRoute);
app.use("/mentors", mentorRoute);