const express = require('express');
const user = require('./controllers/user');
const login = require('./controllers/login');
const jwtAuth = require('./middleware/jwtAuth');
const product = require('./controllers/product');
const contract = require('./controllers/contract');
const firewall = require('./middleware/firewall');

const router = express.Router({ mergeParams: true });

router.use('/login', firewall, login);
router.use('/register', firewall, user);
router.use('/product', firewall, jwtAuth, product);
router.use('/contract', firewall, jwtAuth, contract);

module.exports = router;
