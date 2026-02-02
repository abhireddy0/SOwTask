const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true, 
  },
  label: {
    type: String,
    required: true, 
  },
  flagUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Language", languageSchema);
