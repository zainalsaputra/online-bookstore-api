const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const seedUsers = require("./customer.seeder");
const seedAuthors = require("./author.seeder");
const seedBooks = require("./book.seeder");
const seedWarehouses = require("./warehouse.seeder");
const seedBooksProducts = require("./books_product.seeder");

const main = async () => {
  const hashedPassword = await bcrypt.hash("password", 10);
  await seedUsers(prisma, hashedPassword);
  await seedAuthors(prisma);
  await seedBooks(prisma);
  await seedWarehouses(prisma);
  await seedBooksProducts(prisma);
};

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
