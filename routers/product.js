const express = require("express");
const products = require("../controller/product");

const router = express.Router();

router.get("/", products.getAll);
router.get("/:productId", products.getOne);
router.post("/", products.insertOne);

module.exports = router;
