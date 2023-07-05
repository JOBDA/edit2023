const express = require("express");
const app = express();
const { logger } = require("./middleware");

const db = [
    {
        id: 1,
        title: "Star Wars: Episode IV - A New Hope",
        genre: "sci-fi",
        year: 1977,
      },
      {
        id: 2,
        title: "Citizen Kane",
        genre: "drama",
        year: 1941,
      },
      {
        id: 3,
        title: "Pulp Fiction",
        genre: "crime",
        year: 1994,
      }
];

app.use(logger);

// GET /movies
app.get("/movies", (req, res) => {
    res.status(200).json(db);
});

// GET /movies/:id
app.get("/movies/:id", (req, res) => {
    // get ID from request
    // fetch record from DB
    // return JSON
    const movie = db.find((m) => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).json({ error: "movie not found" });
    }

    res.status(200).json(movie);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "internal error" });
});

app.listen(3000, () => {
    console.log("engine started...");
});