const uuid = require('uuid');

const projects = {};

function getProjects(req, res) {
  return res.json(projects);
}

function getTasks(req, res) {
  const projectId = req.params.id;
  const project = projects[projectId];
  if (!project) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }
  res.json(project.tasks);
}

function createProject(req, res) {
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid input: name is required.' });
  }
  const id = uuid.v4();
  const newProject = { id, name, tasks: [] };
  projects[id] = newProject;
  res.status(201).json(newProject);
}

function addTask(req, res) {
  const { status, name } = req.body;
  const id = req.params.id;
  const project = projects[id];

  if (
    !name ||
    !status ||
    typeof name !== 'string' ||
    typeof status !== 'string'
  ) {
    return res
      .status(400)
      .json({ error: 'Invalid input: name and status are required.' });
  }
  if (!project) {
    return res.status(404).json({ error: 'Invalid input: Project not found' });
  }
  const taskId = uuid.v4();
  project.tasks.push({ name, status, id: taskId });
  res.status(201).json({ name, status, id: taskId });
}

function updateTask(req, res) {
  const { name, status } = req.body;
  const { id, taskId } = req.params;
  const project = projects[id];

  if (!project) {
    return res.status(404).json({ error: 'Invalid input: Project not found' });
  }
  if (
    !name ||
    !status ||
    typeof name !== 'string' ||
    typeof status !== 'string'
  ) {
    return res
      .status(400)
      .json({ error: 'Invalid input: name and status are required.' });
  }

  const taskIndex = project.tasks.findIndex((item) => item.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Invalid input: Task not found' });
  }

  project.tasks[taskIndex] = { ...project.tasks[taskIndex], ...task };
  res.status(200).json(project.tasks[taskIndex]);
}

function deleteTask(req, res) {
  const { id, taskId } = req.params;
  const project = projects[id];
  if (!project) {
    return res.status(404).json({ error: 'Invalid input: Project not found' });
  }

  const taskIndex = project.tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Invalid input: Task not found' });
  }
  project.tasks.splice(taskIndex, 1);
  res.status(204).send();
}

function deleteProject(req, res) {
  const { id } = req.params;
  const project = projects[id];
  if (!project) {
    return res
      .status(404)
      .json({ error: 'Invalid input: Project not found', id });
  }

  delete projects[id];
  res.status(204).send();
}

module.exports = {
  getProjects,
  getTasks,
  createProject,
  addTask,
  updateTask,
  deleteTask,
  deleteProject,
};
