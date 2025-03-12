import React, { useState } from 'react';

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState(5000); // Set the default amount to 5000

  const handlePayment = async (e) => {
    e.preventDefault();
    alert(`Processing Mpesa payment of KES ${amount} from ${phoneNumber}`);

    const url = "https://tinypesa.com/api/v1/express/initialize";
    const payload = `amount=${amount}&msisdn=${phoneNumber}&account_no=5173352010093677&paybill=522522`;

    try {
      const response = await fetch(url, {
        body: payload,
        headers: {
          Apikey: "f2PwegkVj9hUnnF27LvNOIYazX8fdQgkaGvgZ_cM", // Replace with your actual API key
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      });

      if (response.ok) {
        alert('Payment initiated successfully!');
      } else {
        alert('Failed to initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred. Please try again.');
    }
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
