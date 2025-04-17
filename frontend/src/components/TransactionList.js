import React, { useState } from 'react';

const Dashboard = ({ summary, transactions, deleteTransaction, editTransaction }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="summary-cards">
        <div className="card">
          <h3>Total Expenses</h3>
          <p>RS{summary.totalExpenses}</p>
        </div>
        <div className="card">
          <h3>Category Breakdown</h3>
          <ul>
            {summary.categoryBreakdown.map((category) => (
              <li key={category._id}>
                {category._id}: RS{category.total}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Recent Transactions</h3>
          <ul>
            {summary.recentTransactions.map((txn) => (
              <li key={txn._id}>
                {txn.description} - RS{txn.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
        onEdit={editTransaction}
      />
    </div>
  );
};

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    amount: '',
    date: '',
    description: '',
    category: '',
  });

  const handleEditClick = (transaction) => {
    setEditingId(transaction._id);
    setEditFormData({
      amount: transaction.amount,
      date: transaction.date.split('T')[0], // Format date for input
      description: transaction.description,
      category: transaction.category,
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editingId, editFormData);
    setEditingId(null); // Exit edit mode
  };

  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) =>
              editingId === txn._id ? (
                <tr key={txn._id}>
                  <td>
                    <input
                      type="number"
                      name="amount"
                      value={editFormData.amount}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="date"
                      value={editFormData.date}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <select
                      name="category"
                      value={editFormData.category}
                      onChange={handleEditChange}
                    >
                      <option value="Food">Food</option>
                      <option value="Transport">Transport</option>
                      <option value="Utilities">Utilities</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Others">Others</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={handleEditSubmit}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={txn._id}>
                  <td>
                    <span className="currency">RS</span>
                    <span className="amount">{txn.amount}</span>
                  </td>
                  <td>{new Date(txn.date).toLocaleDateString()}</td>
                  <td>{txn.description}</td>
                  <td>{txn.category}</td>
                  <td>
                    <button onClick={() => handleEditClick(txn)}>Edit</button>
                    <button onClick={() => onDelete(txn._id)}>Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export { Dashboard };
export default TransactionList;