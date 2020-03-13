const express = require('express');
const treesController = require('../controllers/trees.controller');
const router = express.Router();

router.route('/')
    .get(treesController.getTree);

module.exports = router