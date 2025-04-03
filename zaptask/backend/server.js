const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected locally'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Start Server
app.listen(port, () => console.log(`🚀 Server is running on port: ${port}`));
