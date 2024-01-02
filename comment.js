// Create web server with controllers

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Create routes
router.post('/', auth, commentController.createComment);
router.get('/', auth, commentController.getComments);
router.get('/:id', auth, commentController.getComment);
router.put('/:id', auth, commentController.updateComment);
router.delete('/:id', auth, commentController.deleteComment);

// Export routes
module.exports = router;