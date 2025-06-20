require("dotenv").config();

const express = require("express");
const app = express();
const bookRouter = require('./routes/book.routes')
const categoryRouter = require('./routes/category.routes')
const orderRouter = require('./routes/order.routes')

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to application");
});

app.use('/api/books', bookRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/orders', orderRouter);

module.exports = app;
