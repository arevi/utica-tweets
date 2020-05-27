const mongoose = require('mongoose');
const mongoURI = require('../config/keys').mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('DB connected!');
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = connectDB;