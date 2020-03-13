const express = require('express');

const venues = require('./venues.route');
const trees = require('./trees.route')

const router = express.Router();

router.use('/venues', venues);
router.use('/trees', trees);

module.exports = router;