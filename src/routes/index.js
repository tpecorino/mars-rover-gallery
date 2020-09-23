const { Router } = require('express');
const health = require('./health');
const rover = require('./rover')

const router = Router();

module.exports = () => {
  router.get('/health', health);
  router.get('/rover', rover);
  return router;
};