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

    const orderData = { amount: 1000};
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
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
  <h1 class="text-2xl font-bold mb-6">Checkout</h1>
  <form onSubmit={handleSubmit} class="space-y-4">
  <div class="flex flex-col">
      <label htmlFor="name" class="text-sm font-semibold text-gray-700">Full Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        required
        class="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div class="flex flex-col">
      <label htmlFor="amount" class="text-sm font-semibold text-gray-700">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        min="1"
        defaultValue="10"
        class="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div class="flex flex-col">
      <label class="text-sm font-semibold text-gray-700">Card details:</label>
      <div class="border border-gray-300 p-2 rounded-lg">
        <CardElement />
      </div>
    </div>
    <button
      type="submit"
      disabled={!stripe || loading}
      class="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
    >
      {loading ? "Processing..." : "Pay"}
    </button>
  </form>
</div>

  );
};

export default CheckoutForm;
