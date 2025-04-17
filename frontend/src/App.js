import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    totalExpenses: 0,
    categoryBreakdown: [],
    recentTransactions: [],
  });

  useEffect(() => {
    fetchTransactions();
    fetchSummary();
  }, []);

  const fetchTransactions = async () => {
    const response = await fetch('https://personal-finance-app-9vr3.onrender.com/api/transactions');
    const data = await response.json();
    setTransactions(data);
  };

  const fetchSummary = async () => {
    const response = await fetch('https://personal-finance-app-9vr3.onrender.com/api/transactions/summary');
    const data = await response.json();
    setSummary(data);
  };

  const addTransaction = async (transaction) => {
    const response = await fetch('https://personal-finance-app-9vr3.onrender.com/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });
    if (response.ok) {
      fetchTransactions();
      fetchSummary();
    }
  };

  const deleteTransaction = async (id) => {
    const response = await fetch(`https://personal-finance-app-9vr3.onrender.com/api/transactions/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchTransactions();
      fetchSummary();
    }
  };

  const editTransaction = async (id, updatedTransaction) => {
    const response = await fetch(`https://personal-finance-app-9vr3.onrender.com/api/transactions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTransaction),
    });
    if (response.ok) {
      fetchTransactions();
      fetchSummary();
    }
  };

  return (
    <div className="app">
      <TransactionForm onSubmit={addTransaction} />
      <Dashboard summary={summary} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
        onEdit={editTransaction}
      />
    </div>
  );
};

export default App;
