const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const authRoutes = require("./auth.route.js");
const booksRoutes = require("./books.route.js");
const cartsRoutes = require("./carts.route.js");
const invoiceRoutes = require("./invoice.route.js");
const checkoutRoutes = require("./checkout.route.js");

router.use("/auth", authRoutes);

router.use("/books", authMiddleware, booksRoutes);

router.use("/cart", authMiddleware, cartsRoutes);

router.use("/invoices", authMiddleware, invoiceRoutes);

router.use("/checkout", authMiddleware, checkoutRoutes);

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Online Bookstore API",
  });
});

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
