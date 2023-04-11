const db = require("../db/models/index");

const { Product } = db;

async function getAll(req, res) {
  try {
    const newProduct = await Product.findAll();
    return res.json(newProduct);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function insertOne(req, res) {
  const { name, price } = req.body;
  try {
    const newProduct = await Product.create({
      updated_at: new Date(),
      created_at: new Date(),
      name: name,
      price: price,
    });
    return res.json(newProduct);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function getOne(req, res) {
  const id = req.params.productId;
  try {
    const output = await Product.findByPk(id);
    return res.json(output);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getAll,
  insertOne,
  getOne,
};
