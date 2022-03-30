const express = require("express");
const helmet = require("helmet");
const path = require("path");

const port = process.env.PORT || 8800;
const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express server listening on: ${port}`);
});

module.exports = app;
