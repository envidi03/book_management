require("dotenv").config();

const express = require("express");
const app = express();
const bookRouter = require('./routes/book.routes')

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to application");
});

app.use('/api/books', bookRouter);

module.exports = app;
