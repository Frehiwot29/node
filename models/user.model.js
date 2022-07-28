const mongoose = require("mongoose");

const productSchema = require("./product.model");

const orderSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    cardNumber: { type: String, require: true },
    amount: { type: Number, require: true },
    products: [productSchema],
});

const userSchema = mongoose.Schema({
    fullname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, require: true },
    cart: [productSchema],
    orders: [orderSchema],
});

mongoose.model("user", userSchema, "users");
