const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next(createError(401, "Unauthorized: No token provided"));
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return next(createError(401, "Unauthorized: Invalid token format"));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return next(createError(403, "Unauthorized: Invalid or expired token"));
    }
};

module.exports = authMiddleware;
