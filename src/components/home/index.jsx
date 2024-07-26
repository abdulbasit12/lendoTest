import React from 'react';

function Lendo() {
  return (
    <div className="lendo-container">
      <header className="lendo-header">
        <div className="logo">Lendo</div>
        <nav className="nav">
          <ul>
            <li>Overview</li>
            <li>Invest</li>
            <li>Auto-Invest</li>
            <li>My Portfolio</li>
          </ul>
        </nav>
        <div className="user-actions">
          <span>En</span>
          <span>👤</span>
        </div>
      </header>

      <div className="main-content">
        <div className="account-summary">
          <div className="account-balance">
            <p>62,540 SAR</p>
            <button className="deposit">Deposit</button>
            <button className="withdraw">Withdraw</button>
          </div>
          <div className="account-details">
            <p>Conservative</p>
            <p>10-14%</p>
            <p>Active</p>
          </div>
        </div>

        <div className="investment-summary">
          <div className="investment-details">
            <p>Max Investment: 1500 SAR</p>
            <p>Loans Funded: 26</p>
            <p>Strategy started at 20th March 2021</p>
            <button className="stop">Stop</button>
            <button className="change-settings">Change Settings</button>
          </div>
          <div className="investment-chart">
            {/* Replace with chart component */}
          </div>
        </div>

        <div className="risk-score">
          <h3>Expected Risk Score Distribution</h3>
          {/* Replace with chart component */}
        </div>

        <div className="trust-and-faq">
          <div className="trust">
            <h4>Why Should You Trust It?</h4>
            <p>Because of this and that. Anyway investing is very good</p>
          </div>
          <div className="faq">
            <h4>You Might Want to Know</h4>
            <ul>
              <li>Why should I trust this tool?</li>
              <li>What risks are related to investments?</li>
              <li>What is the Auto-Investment?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lendo;