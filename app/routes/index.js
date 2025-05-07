const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.route.js");

router.use("/auth", authRoutes);

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
