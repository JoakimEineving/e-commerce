import React from "react";

const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src/assets/images/nike-air-force.png"
            className="max-w-lg rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold">The new Nike Air Force</h1>
            <p className="py-6">
            Our Air Force 1 trainers have been game changers since 1982. Find iconic footwear that's built for comfort at Nike. Free Delivery and Returns.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
