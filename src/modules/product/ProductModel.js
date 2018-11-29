import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  price: Number,
  description: String,
  barcode: String,
  name: String,
  createdby: { type: Schema.Types.ObjectId, ref: "CreatedBy" },
  timestamp: Date
});

export default mongoose.model("Product", productSchema);
