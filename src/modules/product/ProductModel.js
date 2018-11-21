import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  price: Number,
  title: String,
  createdby: { type: Schema.Types.ObjectId, ref: "CreatedBy" },
  timestamp: Date
});

export default mongoose.model("Product", productSchema);
