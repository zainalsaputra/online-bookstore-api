const createError = require("http-errors");
const CartService = require("../services/carts.service.js");

class CartController {
  static async getAllCarts(req, res, next) {
    try {
      const carts = await CartService.getAllCarts();
      if (!carts) {
        return next(createError(404, "No carts found"));
      }
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController;
