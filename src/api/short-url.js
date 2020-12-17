const express = require("express");
const { validationResult } = require("express-validator");
const validateReqToCreateShortUrl = require("../utils/validateReqToCreateShortUrl");
const { getShortCode } = require("../services/shortUrlService");
const router = express.Router();

router.post("/", validateReqToCreateShortUrl(), async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length > 0) return res.status(400).json({ errors: errors });

  const { originalURL } = req.body;
  const shortCode = await getShortCode(originalURL);
  res.json({ shortCode, originalURL });
});

module.exports = router;
