const Joi = require("joi");

const cartValidation = Joi.object({
  customer_id: Joi.string().required(),
  books_product_id: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = {
  cartValidation,
};
