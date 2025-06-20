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
        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user) {
            res.status(401).json({ message: "Unauthorized: User not found" })
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(403).json({
            message: "Forbidden: Invalid Token",
            error: error.message
        })
    }
}

const roleMiddleware = (roles) => {
    (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).json({ message: "Access denied: Insufficent role" })
        }
        next();
    }
}

module.exports = { authMiddleware, roleMiddleware }