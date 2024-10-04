import './Dashboard.css';
import React, { useEffect, useState, useRef } from 'react';


const Dashboard = () => {
    const [revenue, setRevenue] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [profit, setProfit] = useState(0);
    const [sellr, setSellr] = useState(0);
  return (
    <>
    <div className="main">
        <h2 className='pageTitle'>DASHBOARD</h2>  
    </div>
    <div className="dashboard">
      <div className="dashboard-content1">
        <i></i>
        <div className="text-container">
          <p className="dashboard-text">Revenue</p>
          <p className="dashboard-text1">$ {revenue.toFixed(2)}</p>
        </div>
      </div>

      <div className="dashboard-content1">
        <i></i>
        <div className="text-container">
          <p className="dashboard-text">Expenses</p>
          <p className="dashboard-text1">$ {expenses.toFixed(2)}</p>
        </div>
      </div>

      <div className="dashboard-content1">
        <i></i>
        <div className="text-container">
          <p className="dashboard-text">Sell Return</p>
          <p className="dashboard-text1">$ {sellr.toFixed(2)}</p>
        </div>
      </div>

      <div className="dashboard-content1">
        <i></i>
        <div className="text-container">
          <p className="dashboard-text">Profit</p>
          <p className="dashboard-text1">$ {profit.toFixed(2)}</p>
        </div>
      </div>
    </div>

    </>
  );


};

export default Dashboard;
