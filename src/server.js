const express = require('express');
const routes = require('./routes');
const errorHandler = require('./util/errorHandler');

const app = express();
app.use(routes());
app.use(errorHandler);

module.exports = app;