// Create web server

// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller
const controller = require("../controllers/comment");

// Create routes
router.get("/", controller.getAll);
router.post("/", controller.create);
router.delete("/:id", controller.delete);

// Export router
module.exports = router;