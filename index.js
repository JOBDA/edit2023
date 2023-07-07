const express = require("express");
const app = express();
const { logger } = require("./middleware/log");
const movies = require("./movies");

// CRUD - Create Reade Update Delete

// REST
// GET https://api.edit.pt/          => GET
// Get https://api.edit.pt/movies    => GET /movies
// Get https://api.edit.pt/directors => GET /directors

app.use(express.json());
app.use(logger);

app.use("/movies", movies);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "internal error" });
});

app.listen(3000, () => {
  console.log("engine started...");
});
