const createError = require("http-errors");
const AuthServices = require("../services/auth.service.js");
const {
  authValidation,
  loginValidation,
} = require("../validations/auth.validation.js");

class AuthControllers {
  static register = async (req, res, next) => {
    try {
      const { error } = authValidation.validate(req.body);
      if (error) {
        return next(createError(400, error.details[0].message));
      }
      const customer = await AuthServices.register(req.body);
      if (!customer) {
        return next(createError(400, "Customer registration failed"));
      }
      res.status(200).json({
        token: customer,
      });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { error } = loginValidation.validate(req.body);
      if (error) {
        return next(createError(400, error.details[0].message));
      }
      const customer = await AuthServices.login(req.body);
      if (!customer) {
        return next(createError(400, "Customer not registered"));
      }
      res.status(200).json({
        token: customer,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = AuthControllers;
