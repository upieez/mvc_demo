const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require('./routers/product')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});