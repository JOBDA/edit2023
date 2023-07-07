const express = require("express");
const router = express.Router();

const HTTP_STATUS_OK = 200;
const db = [
  {
    id: 1,
    title: "Scary movie",
    genre: "horor",
    year: 1999,
    rentals: 7,
  },
  {
    id: 2,
    title: "Fake movie",
    genre: "action",
    year: 2020,
    rentals: 700,
  },
  {
    id: 3,
    title: "Titanic",
    genre: "drama",
    year: 1998,
    rentals: 900000,
  },
];

// GET /movies
router.get("/", (req, res) => {
  res.status(200).json(db);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const movie = db.find((m) => m.id === parseInt(req.params.id));

  if (!movie) {
    return res.status(404).json({ error: "movie not found" });
  }

  res.status(HTTP_STATUS_OK).json(movie);
});

router.post("/", (req, res) => {
  const body = req.body;

  if (!body.title || !body.genre || !body.year) {
    return res.status(400), json({ error: "invalid body" });
  }

  db.push({ ...body, id: db.length + 1 });
  // get boyd
  // validate
  // store
  // respond
  res.status(HTTP_STATUS_OK).json({});
});

module.exports = router;
