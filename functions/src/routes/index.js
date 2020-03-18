const express = require('express');

const venues = require('./venues.route');
const trees = require('./trees.route');
const drinks = require('./drinks.route');

const router = express.Router();

router.use('/venues', venues);
router.use('/trees', trees);
router.use('/drinks', drinks);

module.exports = router;
