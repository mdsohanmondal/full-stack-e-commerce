const { Router } = require('express');
const { addToWish, getWishlists } = require('../controllers/wishControllers');
const router = Router();

router.post('/add-to-wishlist', addToWish);
router.post('/wishlist', getWishlists);

module.exports = router;
