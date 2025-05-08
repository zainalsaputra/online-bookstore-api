const {
  findAllCarts,
  createdCart,
} = require("../repositories/carts.repository");

class BooksService {
  static async getAllCarts() {
    try {
      const carts = await findAllCarts();
      if (!carts) {
        throw new Error("No carts found");
      }
      if (carts.length === 0) {
        throw new Error("Carts is empty");
      }
      return carts;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async addedCart(body) {
    try {
      const cart = await createdCart(body);
      if (!cart) {
        throw new Error("Failed to add cart");
      }
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BooksService;
