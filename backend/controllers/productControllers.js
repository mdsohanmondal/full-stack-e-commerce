const prisma = require('../lib/prisma');

const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      mainCategory,
      subCategory,
      productType,
      brand,
      size,
      price,
      discount,
      rating,
    } = req.body;
    const product = await prisma.product.create({
      data: {
        title,
        description,
        image,
        mainCategory,
        subCategory,
        productType,
        brand,
        size,
        price,
        discount,
      },
    });
    return res.status(200).json({ message: 'product added', product });
  } catch (e) {
    console.error('error to product create', e);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany({});
  if (!products) {
    return res.status(400).json({ message: 'there are have no product' });
  }
  return res.status(200).json({ products });
};
module.exports = { createProduct, getAllProducts };
