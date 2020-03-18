const express = require('express');
const venuesController = require('../controllers/venues.controller');

const router = express.Router();

router.route('/')
  .get(venuesController.getVenues);

module.exports = router;
