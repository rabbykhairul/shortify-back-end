const CHARS_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

const getShortCode = (originalURL) => {
  return buildShortCode();
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
