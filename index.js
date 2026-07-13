const express = require("express");
require("dotenv").config();

const app = express();

const usersRoutes = require("./routes/usersRoutes");

const PORT = process.env.PORT || 8087;

// Parse JSON request bodies
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});