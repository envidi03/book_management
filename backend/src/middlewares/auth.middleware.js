const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * JWT Auth Middleware
 */
const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startWish("Bearer")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" })
        }

        const token = authHeader.split(' ')[1];
        // const decoded = jwt.verify.(token, JWT_SECRET);

    } catch (error) {

    }
}