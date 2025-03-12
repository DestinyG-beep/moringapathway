import React, { useState } from 'react';

const PayPalPayment = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Processing PayPal payment of $${amount} from ${email}`);
    // Call your PayPal API
  };

  return (
    <div className="payment-method">
      <h2>PayPal Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <label>Email Address:</label>
        <input
          type="email"
          placeholder="your-email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Amount (USD):</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="payment-button">Pay with PayPal</button>
      </form>
    </div>
  );
};

export default PayPalPayment;
