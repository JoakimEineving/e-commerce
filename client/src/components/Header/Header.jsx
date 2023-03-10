import React from "react";

const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src/assets/images/applewatch_header.png"
            className="max-w-lg rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold text-white">Unleash Your Potential with Apple Watch 8</h1>
            <p className="py-6">
            Introducing the all-new Apple Watch 8, the ultimate companion for your active lifestyle! With a sleek design and powerful features, this latest addition to the Apple Watch series will revolutionize the way you track your health and fitness.
            </p>
            <button className="btn btn-primary">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
