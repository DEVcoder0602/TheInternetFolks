const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const mongoURI = process.env.DATABASE_URI;
    console.log("Attempting to connect to MongoDB");
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
