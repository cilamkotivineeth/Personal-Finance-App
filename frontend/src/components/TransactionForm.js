import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    description: '',
    category: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, date, description, category } = formData;

    if (!amount || !date || !description || !category) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setError('Amount must be a positive number.');
      return;
    }

    setError('');
    onSubmit(formData);
    setFormData({ amount: '', date: '', description: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2>Add Transaction</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Clothing">Clothing</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;