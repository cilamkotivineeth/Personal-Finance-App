require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const txnRoutes = require('./routes/transactions');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transactions', txnRoutes);

// Routes
app.use('/api/transactions', txnRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });