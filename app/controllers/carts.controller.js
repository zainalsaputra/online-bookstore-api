const createError = require("http-errors");
const { cartValidation } = require("../validations/carts.validation.js");
const CartService = require("../services/carts.service.js");

class CartController {
  static async getCarts(req, res, next) {
    try {
      const carts = await CartService.getCarts();
      if (!carts) {
        return next(createError(404, "No carts found"));
      }
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }

  static async addedCart(req, res, next) {
    try {
      const body = {
        customer_id: req.user.id,
        ...req.body,
      };
      const { error } = cartValidation.validate(body);
      if (error) {
        return next(createError(400, error.details[0].message));
      }
      const cart = await CartService.addedCart(body);
      if (!cart) {
        return next(createError(404, "Failed to add cart"));
      }
      res.status(201).json(cart);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController;
