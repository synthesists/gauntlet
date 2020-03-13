const express = require('express');
const treesController = require('../controllers/trees.controller');
const router = express.Router();

router.route('/')
    .get(treesController.tree(round));

module.exports = router