// proxy-server.js
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send("Missing URL parameter.");
  }

  try {
    const response = await fetch(targetUrl);

    if (!response.ok) {
      return res
        .status(response.status)
        .send("Failed to fetch target content.");
    }

    const text = await response.text();
    res.setHeader("Content-Type", "text/plain");
    res.send(text);
  } catch (error) {
    console.error("Proxy fetch error:", error.message);
    res.status(500).send("Proxy server error.");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
