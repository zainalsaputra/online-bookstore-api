const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.route.js");
const booksRoutes = require("./books.route.js");
const cartsRoutes = require("./carts.route.js");

router.use("/auth", authRoutes);

router.use("/books", booksRoutes);

router.use("/cart", cartsRoutes);

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
