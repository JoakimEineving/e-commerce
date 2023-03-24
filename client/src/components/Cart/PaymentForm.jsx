// CheckoutForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import ordersService from "../../services/ordersService";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = { amount: 10 };
    const paymentIntent = await ordersService.createPaymentIntent(orderData);

    if (!paymentIntent) {
      console.log("Failed to create payment intent");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      console.log("[error]", error);
      setLoading(false);
    } else {
      console.log("[PaymentIntent]", paymentIntent);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            defaultValue="10"
          />
        </div>
        <div>
          <label>Card details:</label>
          <CardElement />
        </div>
        <button type="submit" disabled={!stripe || loading}>
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
