import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="flex justify-center mt-8">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Add Product</li>
        <li className="step step-primary">Shopping Cart</li>
        {step === 3 ? (
          <li className="step step-primary">Checkout</li>
        ) : (
          <li className="step">Checkout</li>
        )}
        <li className="step">Receive Product</li>
      </ul>
    </div>
  );
};

export default ProgressBar;
