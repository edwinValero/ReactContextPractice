const request = require('supertest');
const app = require('../src/app');

describe('Project API with tasks', () => {
  let projectId;

  beforeAll(async () => {
    const res = await request(app)
      .post('/projects')
      .send({ name: 'testProject' });

    projectId = res.body.id;
  });

  it('should add a task to the project', async () => {
    const res = await request(app)
      .post(`/projects/${projectId}/tasks`)
      .send({ name: 'test task', status: 'init' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('test task');
    expect(res.body.status).toBe('init');
  });

  it('should list all tasks for the project', async () => {
    const res = await request(app).get(`/projects/${projectId}/tasks`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should return 404 if project does not exist', async () => {
    const res = await request(app)
      .post('/projects/999/tasks')
      .send({ name: 'ghost', status: 'hello' });

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toMatch(/not found/i);
  });
});
