const fs = require("fs");
const path = require("path");
const https = require("https");
const express = require("express");

const PORT = 5000;

const app = express();

app.get("/secret", (req, res) => {
  return res.send("Your personal secret value is 42!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
  .createServer(
    {
      key: fs.readFileSync("../key.pem"),
      cert: fs.readFileSync("../cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
