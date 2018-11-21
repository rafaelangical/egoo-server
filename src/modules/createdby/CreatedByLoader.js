import mongoose from "mongoose";
import CreatedByModel from "./CreatedByModel";

const { ObjectId } = mongoose.Types;

const addCreatedBy = ({ name, age }) => {
  const _id = new ObjectId();
  const createdby = new CreatedByModel({ name, age, _id });
  return createdby.save();
};

export default addCreatedBy;
