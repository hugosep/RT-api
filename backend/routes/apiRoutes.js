const express = require('express');
const router = express.Router();

const items = require('../controllers/itemController');
const item = require('../controllers/itemIdController');

router.get('/items', items.getItems);
router.get('/items/:partNumber', item.getItemsDetail);

module.exports = router;