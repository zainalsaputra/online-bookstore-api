const createError = require("http-errors");
const { cartValidation } = require("../validations/carts.validation.js");
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

  static async addedCart(req, res, next) {
    try {
      const { body } = req;
      const { error } = cartValidation.validate(body);
      if (error) {
        return next(createError(400, error.details[0].message));
      }
      const cart = await CartService.addedCart(body);
      if (!cart) {
        return next(createError(404, "Failed to add cart"));
      }
      const data = {
        id: cart.cart_items[0].id,
        cart_id: cart.id,
        book_product_id: cart.cart_items[0].books_product_id,
        quantity: cart.cart_items[0].quantity,
        created_at: cart.created_at,
      };
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController;
