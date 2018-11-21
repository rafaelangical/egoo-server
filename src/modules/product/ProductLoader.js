import mongoose from "mongoose";
import ProductModel from "./ProductModel";
import addCreatedBy from "../createdby/CreatedByLoader";

const { ObjectId } = mongoose.Types;

export const addProduct = ({ price, title, createdby: productCreatedBy }) => {
  return addCreatedBy({ ...productCreatedBy }).then(createdby => {
    const _id = new ObjectId();
    const timestamp = new Date();
    const product = new ProductModel({ title, price, createdby, _id, timestamp });
    return product.save();
  });
};

export const loadAllProducts = () => {
  return ProductModel.find({})
    .then(result => {
      return result;
    });
};
