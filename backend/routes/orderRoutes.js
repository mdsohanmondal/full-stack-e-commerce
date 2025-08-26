const {
  orderProduct,
  updateOrder,
} = require('../controllers/orderControllers');

const { Router } = require('express');
const router = Router();

router.post('/order-product', orderProduct);
router.post('/product/:id', updateOrder);

module.exports = router;
