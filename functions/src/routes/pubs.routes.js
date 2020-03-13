const express = require('express');
const pubsController = require('../controllers/pubs.controller');
const router = express.Router();

router.route('/')
    .get(pubsController.getPubs);

module.exports = router
