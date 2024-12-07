const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');

// Routes
router.get('/', getItems);          // Get all items
router.get('/:id', getItemById);    // Get item by ID
router.post('/', createItem);       // Create new item
router.put('/:id', updateItem);     // Update item by ID
router.delete('/:id', deleteItem);  // Delete item by ID

module.exports = router;
