const Joi = require("joi");

const checkoutValidation = Joi.object({
  customer_id: Joi.string().required(),
});

module.exports = {
  checkoutValidation,
};
