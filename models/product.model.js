const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    type: { type: String, require: true },
})
mongoose.model("product", ProductSchema,"products")
module.exports = ProductSchema;