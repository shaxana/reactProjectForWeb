const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imgUrl: String,
  rating: Number,
  favRating: Number,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product