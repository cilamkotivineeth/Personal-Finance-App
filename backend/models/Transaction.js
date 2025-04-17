const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true, // Ensure every transaction has a category
    enum: ['Food', 'Transport', 'Utilities', 'Entertainment','Clothing', 'Others'], // Predefined categories
  },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);