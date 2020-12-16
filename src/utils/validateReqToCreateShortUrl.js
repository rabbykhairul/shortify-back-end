const { body } = require("express-validator");

const validateReqToCreateShortUrl = () => {
  return [
    body("originalURL")
      .exists()
      .withMessage("The original URL that you want to shorten is required!")
      .isURL()
      .withMessage("The string given is not a valid URL!"),
  ];
};

module.exports = validateReqToCreateShortUrl;
