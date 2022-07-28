const mongoose = require("mongoose");
const Product = mongoose.model("product");

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
};

const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json(product);
};

const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct, };