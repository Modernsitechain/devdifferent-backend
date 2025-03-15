// Code to express application with MongoDB
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://<username>:<password>@<container-name>:27017/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
