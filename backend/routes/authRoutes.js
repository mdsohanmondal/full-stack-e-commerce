const { Router } = require('express');
const { createUser } = require('../controllers/authController');
const router = Router();

router.post('/sign-up', createUser);

module.exports = router;
