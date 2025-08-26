const prisma = require('../lib/prisma');

const orderProduct = async (req, res) => {
  try {
    const { userId, productId, productImage, price, quantity } = req.body;
    const order = await prisma.order_details.create({
      data: {
        userId,
        productId,
        productImage,
        price,
        quantity,
        totalPrice: price * quantity,
      },
      include: {
        user,
        product,
      },
    });
    if (!order) {
      return res.status(400).json({ message: 'order failed' });
    }

    return res.status(200).json({ order });
  } catch (e) {
    console.error('order submit failed', e);
    return res.status(500).json({ message: 'Server error' });
  }
};

const updateOrder = async (req, res) => {
  const { isPayed, quantity, isDelivered } = req.body;
  const { id } = req.params;
  const priceOfProduct = await prisma.order_details.findUnique({
    where: { id },
    select: { price: true },
  });
  const updatedOrder = await prisma.order_details.update({
    where: { id },
    data: {
      isPayed,
      payedAt: isPayed ? new Date().toISOString() : null,
      isDelivered,
      deliveredAt: isDelivered ? new Date().toISOString() : null,
      totalPrice: priceOfProduct.price * quantity,
      quantity,
    },
  });
  return res.status(200).json({ message: 'updated order', updatedOrder });
};
module.exports = { orderProduct, updateOrder };
