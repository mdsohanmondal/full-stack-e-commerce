require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('../routes/userRoute');
const authRoutes = require('../routes/authRoutes');
const productRoutes = require('../routes/productRoutes');
const orderProductsRoutes = require('../routes/orderRoutes');
const cartRoutes = require('../routes/cartRoutes');
const wishRoutes = require('../routes/wishRoutes');

app.use(require('../middlewares/middleware'));
app.use('/app/v1', userRoutes);
app.use('/app/v1/auth', authRoutes);
app.use('/app/v1', productRoutes);
app.use('/app/v1', orderProductsRoutes);
app.use('/app/v1', cartRoutes);
app.use('/app/v1', wishRoutes);

module.exports = app;
