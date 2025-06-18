require("dotenv").config();
const mongoose = require("mongoose");
const server = require('./app');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

mongoose
    .connect(`${process.env.URL}${process.env.DBNAME}`)
    .then(() => {
        console.log("✅ Connect to MongoDB using mongoose");

        server.listen(PORT, () => {
            console.log(`🚀 Server is running at http://${HOSTNAME}:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Connect to MongoDB failed:", err.message);
    });
