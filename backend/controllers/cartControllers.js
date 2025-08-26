const prisma = require('../lib/prisma');
const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const addCart = await prisma.cart.create({
      data: { userId, productId },
      include: { user: true, product: true },
    });
    if (!addCart) {
      return res.status(400).json({ message: 'Add to cart failed' });
    }
    return res.status(200).json({ addCart });
  } catch (e) {
    console.error('failed to add this cart', e);
    res.status(500).json({ message: 'server error' });
  }
};

const getAllCarts = async (_req, res) => {
  try {
    const carts = await prisma.cart.findMany({
      include: { user: true, product: true },
    });
    if (!carts) {
      return res.status(400).json({ message: "your don't have of any cart" });
    }
    res.status(200).json({ carts });
  } catch (e) {
    console.error('get carts failed', e);
    res.status(500).json({ message: 'Server error' });
  }
};

const getCartsById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await prisma.cart.findUnique({
      where: { id },
    });
    if (!cart) {
      return res
        .status(400)
        .json({ message: "your don't have of any cart of this id" });
    }
    res.status(200).json({ cart });
  } catch (e) {
    console.error('Find cart failed', e);
    res.status(500).json({ message: 'server error' });
  }
};

module.exports = { addToCart, getAllCarts, getCartsById };
