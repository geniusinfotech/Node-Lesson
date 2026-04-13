const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const userRouter = require("./routes/v1/user.route");

PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set(db());

app.get("/", (req, res) => {
  res.status(401).json({ message: "Access Denined" });
});
app.use("/user", userRouter); // localhost:3005/user/register

app.listen(PORT, () => {
  console.log(`✅ server is Runing ${PORT}`);
});
