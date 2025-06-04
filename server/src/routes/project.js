const express = require('express');
const router = express.Router();
const {
  getProjects,
  getTasks,
  createProject,
  addTask,
  updateTask,
  deleteTask,
  deleteProject,
} = require('../controllers/project');

router.get('/', getProjects);
router.get('/:id/tasks', getTasks);

router.post('/', createProject);
router.post('/:id/tasks', addTask);

router.put('/:id/tasks/:taskId', updateTask);
router.delete('/:id/tasks/:taskId', deleteTask);
router.delete('/:id', deleteProject);

module.exports = router;
