const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const cors = require("cors");
app.use(cors());

const errorHandler = require("./middlewares/errorHandler.js");
const routes = require("./routes/index.js");

app.use(express.json());
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const prisma = require("./config/prisma.client.js");

prisma.$connect()
.then(() => console.log('Database connected successfully!'))
.catch((err) => console.error('Error connecting to database:', err));