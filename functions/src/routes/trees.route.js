const express = require('express');
const treesController = require('../controllers/trees.controller');

const router = express.Router();

router.route('/')
  .post(treesController.getTree);

module.exports = router;
