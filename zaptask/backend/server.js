const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error("❌ MongoDB URI is missing! Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoURI) // No need for deprecated options
  .then(() => console.log('✅ MongoDB connected locally'))
  .catch(err => console.log('❌ MongoDB connection error:', err));
