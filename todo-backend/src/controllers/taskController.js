const Task = require('../models/taskModel');

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Create a new task
const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await Task.create({ title, description });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, isCompleted } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
