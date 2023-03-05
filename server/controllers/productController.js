const Product = require("../models/productModel");

const getProducts = async function (req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products.reverse());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const products = { getProducts };

module.exports = products;
