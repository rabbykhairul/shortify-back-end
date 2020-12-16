const express = require("express");
const { validationResult } = require("express-validator");
const validateReqToCreateShortUrl = require("../utils/validateReqToCreateShortUrl");
const router = express.Router();

router.post("/", validateReqToCreateShortUrl(), (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length > 0) return res.status(400).json({ errors: errors });
});

module.exports = router;
