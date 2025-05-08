require("dotenv").config();
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const prisma = require("../config/prisma.client.js");
const { addedCustomer } = require("../repositories/auth.repository.js");

class AuthServices {
  static async register(body) {
    const password = await bcrypt.hash(body.password, 10);
    const customer = await addedCustomer(body, password);
    if (!customer) {
      return createError.InternalServerError("Customer registration failed");
    }
    delete customer.password;
    const token = jwt.sign(
      {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        phone: customer.phone,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION },
    );
    if (!token) {
      return createError.InternalServerError("Token generation failed");
    }
    return token;
  }

  static async login(data) {
    const { email, password } = data;
    const customer = await prisma.customer.findUnique({
      where: {
        email,
      },
    });
    if (!customer) {
      throw createError.NotFound("Customer not registered");
    }
    const checkPassword = bcrypt.compareSync(password, customer.password);
    if (!checkPassword) {
      throw createError.Unauthorized("Email address or password not valid");
    }
    delete customer.password;
    const token = jwt.sign(
      {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        phone: customer.phone,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION },
    );
    if (!token) {
      throw createError.InternalServerError("Token generation failed");
    }
    return token;
  }
}

module.exports = AuthServices;
