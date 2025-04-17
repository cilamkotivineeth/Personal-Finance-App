import React from 'react';

const Dashboard = ({ summary }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Total Expenses Section */}
      <div className="dashboard-section">
        <h3>Total Expenses</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RS</td>
              <td>{summary.totalExpenses}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Category Breakdown Section */}
      <div className="dashboard-section">
        <h3>Category Breakdown</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {summary.categoryBreakdown.map((category) => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>{category.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Transactions Section */}
      <div className="dashboard-section">
        <h3>Recent Transactions</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {summary.recentTransactions.map((txn) => (
              <tr key={txn._id}>
                <td>{txn.description}</td>
                <td>{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;