const express = require('express');
const drinksController = require('../controllers/drinks.controller');
const router = express.Router();

router.route('/')
    .post(drinksController.getDrinks);

module.exports = router