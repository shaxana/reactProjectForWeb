const Product = require("./../models/productModel");

const getAllProduct = async (req, res) => {
  const allProduct = await Product.find({});
  res.send(allProduct);
};

const getProductById = async (req, res) => {
  const productById = await Product.findOne({ _id: req.params.id });
  res.send(productById);
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send(deletedProduct);
};

const postProduct = async (req, res) => {
  const newProduct = await new Product(req.body);
  await newProduct.save();
  res.send(newProduct);
};


module.exports ={getAllProduct, getProductById, deleteProduct, postProduct}