// setup env file
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const db = require("./config/db");
const userRouter = require("./routes/web/user.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();

// To excess env values in file:
// Backend (node + express) --> process.env.(env file variable name)
// Frontend (React) --> import.meta.env.(env file variable name)
PORT = process.env.PORT;

// home route (temp route) --> in Backend we don't create a Home Route. after Testing/ Development --> Remove Home Route
app.get("/", (req, res) => {
  res.send("server's Homepage");
});
app.use("/user", userRouter); // 1. localhost:3005/user/register

app.listen(PORT, () => {
  console.log(`✅ Server is Running on PORT ${PORT}`);
});
