const express = require("express");

const router = express.Router();

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

// Get all tasks
router.get("/", getTasks);

// Create a new task
router.post("/", createTask);

// Update a task
router.put("/:id", updateTask);

// Delete a task
router.delete("/:id", deleteTask);

module.exports = router;
