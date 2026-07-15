const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const PORT = process.env.PORT || 8089;

connectDB();

app.use(express.json())

app.use("/students", studentRoutes);

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});