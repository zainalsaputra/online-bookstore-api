const prisma = require("../config/prisma.client.js");

const findAllBooks = async () => {
  const getBooksWithAuthor = await prisma.book.findMany({
    select: {
      id: true,
      title: true,
      isbn: true,
      publication_year: true,
      genre: true,
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return getBooksWithAuthor;
};

const findBooksDetailById = async (id) => {
  const getBook = await prisma.book.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      isbn: true,
      publication_year: true,
      genre: true,
      author: {
        select: {
          id: true,
          name: true,
        },
      },
      books_products: {
        select: {
          id: true,
          format: true,
          price: true,
          warehouse: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return getBook;
};

module.exports = {
  findAllBooks,
  findBooksDetailById,
};
