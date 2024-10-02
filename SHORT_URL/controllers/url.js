const shortid = require("shortid");
const URL = require("../models/url");

const generateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Url is required" });
  const shortId = shortid();

  await URL.create({
    shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
};

module.exports = { generateNewShortURL };
