import createError from "http-errors";
import Product from "../models/product.model.js";
import productSchema from "../helpers/validation_product_schema.js";

export const createProduct = async (req, res, next) => {
  try {
    const { body, file } = req;
    const requestData = { ...body, ...file };

    const { title, description, old_price, discount_percent, stock, path } =
      requestData;
    const result = await productSchema.validateAsync({
      title: title,
      description: description,
      old_price: old_price,
      discount_percent: discount_percent,
      stock: stock,
      image: path,
    });
    const product = new Product(result);
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) error.status = 433;
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id.length != 24) throw createError.NotFound("Product Doesn't Exist");
    const product = await Product.findById(id);
    if (!product) throw createError.NotFound("Product Doesn't Exist");
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) error.status = 404;
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id.length != 24) throw createError.NotFound("Product Doesn't Exist");
    const { body, file } = req;
    const requestData = { ...body, ...file };

    const { title, description, old_price, discount_percent, stock, path } =
      requestData;
    const result = await productSchema.validateAsync({
      title: title,
      description: description,
      old_price: old_price,
      discount_percent: discount_percent,
      stock: stock,
      image: path,
    });

    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, result);
    if (!updatedProduct)
      throw createError.NotFound("You can't edit this product");
    res.send({ message: "updated successfully" });
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) error.status = 404;
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id.length != 24) throw createError.NotFound("Product Doesn't Exist");
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    if (!deleteProduct)
      throw createError.NotFound("You can't delete this product");
    res.send({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) error.status = 404;
    next(error);
  }
};
