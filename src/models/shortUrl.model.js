const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  shortCode: { type: String, unique: true, required: true },
  originalURL: { type: String, required: true },
});

module.exports = mongoose.model("ShortURL", shortUrlSchema);
