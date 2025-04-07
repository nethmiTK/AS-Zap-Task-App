const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // Import the router
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the task routes
app.use('/api', taskRoutes); // Mount the router at the '/api' path

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`));
