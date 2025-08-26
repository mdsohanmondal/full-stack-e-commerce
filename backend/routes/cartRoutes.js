const { Router } = require('express');
const {
  addToCart,
  getAllCarts,
  getCartsById,
} = require('../controllers/cartControllers');
const router = Router();

router.post('/add-to-cart', addToCart);
router.get('/carts', getAllCarts);
router.post('/carts/:id', getCartsById);

module.exports = router;
