const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// Create Todo ✅
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// Read Todos ✅
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Update Todo ✅
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete Todo ✅
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
