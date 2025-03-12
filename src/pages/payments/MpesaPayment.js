import React, { useState } from 'react';

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Processing Mpesa payment of KES ${amount} from ${phoneNumber}`);
    // Call your Mpesa API
  };

  return (
    <div className="payment-method">
      <h2>Mpesa Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <label>Phone Number:</label>
        <input
          type="text"
          placeholder="2547XXXXXXXX"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label>Amount (KES):</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="payment-button">Pay Now</button>
      </form>
    </div>
  );
};

export default MpesaPayment;
