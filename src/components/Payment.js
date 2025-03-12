import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import '../styles/payment.css'; // Import the CSS for styling
import config from '../config';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handleMpesaPayment = async () => {
    try {
      const { data } = await axios.post(`${config.backendUrl}/payments/mpesa`, {
        phone_number: "254712345678",
        amount: amount,
      });
      alert(data.ResponseDescription);
    } catch (error) {
      console.error("Mpesa Payment Failed:", error);
      alert("Mpesa Payment Failed. Please try again.");
    }
  };

  const handleStripePayment = async (token) => {
    try {
      await axios.post(`${config.backendUrl}/payments/stripe`, {
        amount: amount,
        payment_method: token.id
      });
      alert("Payment Successful!");
    } catch (error) {
      console.error("Stripe Payment Failed:", error);
      alert("Stripe Payment Failed. Please try again.");
    }
  };

  const handlePaypalPayment = async () => {
    try {
      const { data } = await axios.post(`${config.backendUrl}/payments/paypal`, {
        amount: amount,
      });
      window.location.href = data.links[1].href; // Redirect to PayPal
    } catch (error) {
      console.error("PayPal Payment Failed:", error);
      alert("PayPal Payment Failed. Please try again.");
    }
  };

  const handlePayment = async () => {
    const paymentData = {
      amount: amount,
    };

    try {
      await axios.post('/api/payment', paymentData);
      alert('Payment successful');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>
      <div className="payment-form">
        <label>Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
        <div className="payment-buttons">
          <button onClick={handleMpesaPayment}>Pay with Mpesa</button>

          <StripeCheckout
            stripeKey="your-stripe-public-key"
            token={handleStripePayment}
            amount={amount * 100}
            currency="USD"
          >
            <button>Pay with Stripe</button>
          </StripeCheckout>

          <button onClick={handlePaypalPayment}>Pay with PayPal</button>
          <button onClick={handlePayment}>Other Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
