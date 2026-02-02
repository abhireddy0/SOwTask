import mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
});

export const Translation = mongoose.model("Translation", translationSchema);
