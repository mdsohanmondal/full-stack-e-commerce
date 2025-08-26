const { Router } = require('express');
const router = Router();
const {
  createProduct,
  getAllProducts,
} = require('../controllers/productControllers');

router.post('/admin/add-product', createProduct);
router.get('/products', getAllProducts);

module.exports = router;
