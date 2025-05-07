const Joi = require("joi");

authValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
  address: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(3).max(30).required(),
});

loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
});

module.exports = {
  authValidation,
  loginValidation,
};
