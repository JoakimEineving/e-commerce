const stripe = require("stripe")("sk_test_51DWTJ8GR5hBA22vVFJSEILXTVArNxJ0owGkmfrNMvn8B0SzthfagiDGUu6TjdqZKN6Qc4MKklLDaMMyaAv7CPrQa009gvBgx6j");

const createPaymentIntent = async (req, res) => {
  console.log("Stripe secret key:", process.env.STRIPE_SECRET_KEY);
  console.log("req.body", req.body);
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.status(200).json(paymentIntent);
    console.log(paymentIntent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating the payment intent." });
  }
};

module.exports = {
  createPaymentIntent,
}