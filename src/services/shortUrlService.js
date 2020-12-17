const ShortURLModel = require("../models/shortUrl.model");

const CHARS_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

const getShortCode = async (originalURL) => {
  while (true) {
    try {
      const shortCode = buildShortCode();
      const model = new ShortURLModel({ shortCode, originalURL });
      await model.save();
      return shortCode;
    } catch (err) {}
  }
};

const buildShortCode = () => {
  let shortCode = "";
  for (let i = 1; i <= 6; i++) shortCode += getRandomChar();
  return shortCode;
};

const getRandomChar = () => {
  const randomIdx = Math.floor(Math.random() * CHARS_STRING.length);
  return CHARS_STRING[randomIdx];
};

module.exports = {
  getShortCode,
};
// vfnZ3yzCaYuty47Z
