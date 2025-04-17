const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Add a new transaction
router.post('/', async (req, res) => {
  const { amount, date, description, category } = req.body;
  try {
    const newTransaction = new Transaction({ amount, date, description, category });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add transaction' });
  }
});

// Edit a transaction
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { amount, date, description, category } = req.body;
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { amount, date, description, category },
      { new: true }
    );
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update transaction' });
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete transaction' });
  }
});

// Get summary data for dashboard
router.get('/summary', async (req, res) => {
  try {
    const totalExpenses = await Transaction.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);

    const categoryBreakdown = await Transaction.aggregate([
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
    ]);

    const recentTransactions = await Transaction.find().sort({ date: -1 }).limit(5);

    res.status(200).json({
      totalExpenses: totalExpenses[0]?.total || 0,
      categoryBreakdown,
      recentTransactions,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch summary data' });
  }
});

module.exports = router;