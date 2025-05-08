const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const seedUsers = require("./customer.seeder");
const seedAuthors = require("./author.seeder");
const seedBooks = require("./book.seeder");
const seedWarehouses = require("./warehouse.seeder");
const seedBooksProducts = require("./books_product.seeder");
const seedCarts = require("./cart.seeder");
const seedCartItems = require("./cart_item.seeder");
const invoiceSeeder = require("./invoice.seeder");
const invoiceItemSeeder = require("./invoice_item.seeder");

const main = async () => {
  const hashedPassword = await bcrypt.hash("password", 10);
  await seedUsers(prisma, hashedPassword);
  await seedAuthors(prisma);
  await seedBooks(prisma);
  await seedWarehouses(prisma);
  await seedBooksProducts(prisma);
  await seedCarts(prisma);
  await seedCartItems(prisma);
  await invoiceSeeder(prisma);
  await invoiceItemSeeder(prisma);
};

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
