import mongoose, { Schema } from "mongoose";

const createdbySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number
});

export default mongoose.model("CreatedBy", createdbySchema);
