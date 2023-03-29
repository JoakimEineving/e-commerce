const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
  res.status(200).json(paymentIntent);
  console.log(paymentIntent);
});

module.exports = { createPaymentIntent }