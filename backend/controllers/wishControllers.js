const prisma = require('../lib/prisma');
const addToWish = async (req, res) => {
  try {
    const { id, userId, productId } = req.body;
    const wishlist = await prisma.wishList.create({
      data: { id, userId, productId },
    });
    return res.status(200).json({ wishlist });
  } catch (e) {
    console.error('add to wish failed', e);
    res.status(500).json({ message: 'Server error' });
  }
};

const getWishlists = async (_req, res) => {
  try {
    const wishLists = await prisma.wishList.findMany();
    return res.status(200).json(wishLists);
  } catch (e) {
    console.error('failed to get wishlist', e);
    return res.status(500).json({ message: 'Server error' });
  }
};
module.exports = { addToWish, getWishlists };
