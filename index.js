const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("ok")
});

app.get("/foo", (req, res) => {
    res.send("foo")
});

app.listen(3000, () => {
    console.log("engine started...")
});