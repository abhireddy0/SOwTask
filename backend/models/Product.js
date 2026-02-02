import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  inPrice: Number,
  price: Number,
  vat: Number,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Product = mongoose.model("Product", productSchema);
