const createError = require("http-errors");

const { checkoutValidation } = require("../validations/checkout.validation.js");
const CheckoutService = require("../services/checkout.service.js");

class CheckoutController {
  static async checkout(req, res, next) {
    try {
      const customer_id = req.user.id;
      const { error } = checkoutValidation.validate({ customer_id });
      if (error) {
        return next(createError(400, error.details[0].message));
      }
      const checkout = await CheckoutService.processCheckout(customer_id);
      if (!checkout) {
        return next(createError(404, "Checkout failed"));
      }
      res.status(200).json(checkout);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CheckoutController;
