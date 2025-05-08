const { findAllCarts } = require("../repositories/carts.repository");

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
}

module.exports = BooksService;
