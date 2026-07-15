const mongoose = require("mongoose");

const connectDB = async () => {
    console.log("connectDB function called");

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log("Connection Error");

    }
};


module.exports = connectDB;