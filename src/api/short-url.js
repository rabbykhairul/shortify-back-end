const express = require("express");
const { validationResult } = require("express-validator");
const validateReqToCreateShortUrl = require("../utils/validateReqToCreateShortUrl");
const { getShortCode } = require("../services/shortUrlService");
const router = express.Router();

// build a short code for a long url
router.post("/", validateReqToCreateShortUrl(), async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length > 0) return res.status(400).json({ errors: errors });

  const { originalURL } = req.body;
  const shortCode = await getShortCode(originalURL);
  res.json({ shortCode, originalURL });
});

// get the original url for a specific short code
router.get("/", async (req, res) => {
  const { shortCode } = req.query.shortCode;
  if (!shortCode)
    return res.status(400).json({
      errors: {
        msg: "Undefined queryString value for 'shortCode'",
        param: "shortCode",
        location: "query",
      },
    });
});

module.exports = router;
