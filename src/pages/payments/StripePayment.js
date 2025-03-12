import React, { useState } from 'react';

const StripePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Processing Stripe payment of $${amount} with card ending in ${cardNumber.slice(-4)}`);
    // Call your Stripe API
  };

  return (
    <div className="payment-method">
      <h2>Stripe Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <label>Card Number:</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <label>Expiry Date:</label>
        <input
          type="text"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <label>CVC:</label>
        <input
          type="text"
          placeholder="123"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
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
        <button type="submit" className="payment-button">Pay with Stripe</button>
      </form>
    </div>
  );
};

export default StripePayment;
