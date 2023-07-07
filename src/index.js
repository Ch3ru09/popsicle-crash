const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 3000;

// app.set("views", path.join(__dirname, "views/"));
// app.engine(".html", require("ejs").renderFile);
// app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/game", (_req, res) => {
  res.sendFile(path.join(__dirname, "views", "game.html"));
});

app.listen(port, () => {
  console.log(`>> listening on port ${port}`);
});

