const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/project');
const logger = require('./middleware/logger');
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/projects', projectRoutes);

module.exports = app;
