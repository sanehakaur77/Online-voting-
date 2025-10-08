const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.URL; // MongoDB connection string
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Error connecting to database:", err.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;
