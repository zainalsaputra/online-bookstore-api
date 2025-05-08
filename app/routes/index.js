const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const authRoutes = require("./auth.route.js");
const booksRoutes = require("./books.route.js");
const cartsRoutes = require("./carts.route.js");

router.use("/auth", authRoutes);

router.use("/books", booksRoutes);

router.use("/cart", authenticate, cartsRoutes);

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
