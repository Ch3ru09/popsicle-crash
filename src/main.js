const express = require("express");
const app = express();

const port = env.process.port || 3000;

app.get("/", (_req, res) => {
  res.render("./game/index.html");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

