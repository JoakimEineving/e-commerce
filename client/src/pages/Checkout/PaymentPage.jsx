import React from "react";
import { Navbar, Checkout, PaymentForm } from "../../components/index";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const PaymentPage = () => {
  const stripePromise = loadStripe(
    "pk_test_3ilZVeWf3hy2QiHbUxMfSgfj"
  );
  return (
    <div>
      <Navbar />
      <Elements stripe={stripePromise}>
        <PaymentForm />
        </Elements>
    </div>
  );
};

export default PaymentPage;
