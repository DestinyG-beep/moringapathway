import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/payment.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePayment = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment successful!');
    navigate('/premium');
  };

  return (
    <div className="payment-page">
      <h1>Select Payment Method</h1>
      <div className="payment-methods">
        <button onClick={() => handlePayment('mpesa')}>Pay with Mpesa</button>
        <button onClick={() => handlePayment('paypal')}>Pay with PayPal</button>
        <button onClick={() => handlePayment('stripe')}>Pay with Stripe</button>
      </div>

      {selectedMethod && (
        <form onSubmit={handleSubmit} className="payment-form">
          <h2>{`Payment with ${selectedMethod.charAt(0).toUpperCase() + selectedMethod.slice(1)}`}</h2>

          {selectedMethod === 'mpesa' && (
            <>
              <label>Phone Number:</label>
              <input type="tel" placeholder="07XXXXXXXX" required />
              <label>Amount:</label>
              <input type="number" placeholder="Enter amount" required />
            </>
          )}

          {selectedMethod === 'paypal' && (
            <>
              <label>Email:</label>
              <input type="email" placeholder="example@email.com" required />
              <label>Amount:</label>
              <input type="number" placeholder="Enter amount" required />
            </>
          )}

          {selectedMethod === 'stripe' && (
            <>
              <label>Card Number:</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
              <label>Expiry Date:</label>
              <input type="text" placeholder="MM/YY" required />
              <label>CVV:</label>
              <input type="text" placeholder="123" required />
              <label>Amount:</label>
              <input type="number" placeholder="Enter amount" required />
            </>
          )}

          <button type="submit">Proceed with {selectedMethod.toUpperCase()}</button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
