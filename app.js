const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// express middleware
app.use(express.json());

//assign the port
app.listen(3001, 'localhost', () => {
  console.log('Server is running on port 3001!');
});

module.exports = app;
module.exports = connectDB;
