require("dotenv").config();

const express = require("express");
const app = express();
const HOSTNAME = process.env.HOSTNAME || 'localhost';


app.get("/", (req, res) => {
    res.send("Welcome to application");
});

module.exports = app;
