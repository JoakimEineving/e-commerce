import React from "react";
import { Navbar, Checkout } from "../../components/index";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const CheckoutPage = () => {
  const stripePromise = loadStripe(
    "pk_test_51MleTaD7q8sEvbFXtOJ1qJtFGLUps6Sloci1SpmJr0wEH6DmMtBo370gxzPM7r8tdJDt46NjfBqEbOhHF2HfhIp100lh5nQBKg"
  );
  return (
    <div>
      <Navbar />
      <Elements stripe={stripePromise}>
        <Checkout />
        </Elements>
    </div>
  );
};

export default CheckoutPage;
