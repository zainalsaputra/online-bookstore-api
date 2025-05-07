const prisma = require("../config/prismaClient.js");

const addedCustomer = async (body, password_) => {
  const existingUser = await prisma.customer.findUnique({
    where: { email: body.email },
  });

  if (existingUser) {
    throw new Error("Email is already registered");
  }

  const addUser = await prisma.customer.create({
    data: {
      name: body.name,
      email: body.email,
      password: password_,
      address: body.address,
      phone: body.phone,
    },
  });
  return addUser;
};

module.exports = { addedCustomer };
