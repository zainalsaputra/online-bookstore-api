const Joi = require("joi");

const cartValidation = Joi.object({
  bookId: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = {
  cartValidation,
};
