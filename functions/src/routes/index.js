const express = require('express');

const venues = require('./venues.route');

const router = express.Router();

router.use('/venues', venues);

module.exports = router;