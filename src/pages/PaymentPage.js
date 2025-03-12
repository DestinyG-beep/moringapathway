import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/payment.css';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    if (method === 'mpesa') {
      navigate('/payment/mpesa');
    } else if (method === 'paypal') {
      navigate('/payment/paypal');
    } else if (method === 'stripe') {
      navigate('/payment/stripe');
    }
  };

  return (
    <div>
      <h1>Select Payment Method</h1>
      <button onClick={() => handlePayment('mpesa')}>Pay with Mpesa</button>
      <button onClick={() => handlePayment('paypal')}>Pay with PayPal</button>
      <button onClick={() => handlePayment('stripe')}>Pay with Stripe</button>
    </div>
  );
};

export default PaymentPage;
