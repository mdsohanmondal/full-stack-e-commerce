const express = require('express');
const morgan = require('morgan');

const middleware = [
  morgan(),
  express.json(),
  express.urlencoded({ extended: true }),
];
module.exports = middleware;
