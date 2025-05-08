const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const seedUsers = require("./user.seeder");
const seedBooks = require("./book.seeder");

const main = async () => {
  const hashedPassword = await bcrypt.hash("password", 10);
  await seedUsers(prisma, hashedPassword);
  await seedBooks(prisma);
};

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
