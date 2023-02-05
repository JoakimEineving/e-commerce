const Product = require("../models/productModel");

const uploadProduct = async function (req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async function (req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products.reverse());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const products = { uploadProduct, getProducts };

module.exports = products;