import type { Project, Task } from '../types/ProjectType';
const apiUrl = import.meta.env.VITE_API_URL;

const projectsURL = `${apiUrl}/projects`;

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(projectsURL);
  if (!res.ok) throw new Error('Error loading projects');
  const data = await res.json();
  const projects: Project[] = Object.values(data);
  return projects;
}

export async function createProject(name: string): Promise<Project> {
  const request = new Request(projectsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  const res = await fetch(request);
  if (!res.ok) throw new Error('Error creating project');
  const newProject: Project = await res.json();
  return newProject;
}

export async function createTask(
  name: string,
  projectId: string
): Promise<Task> {
  const request = new Request(`${projectsURL}/${projectId}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, status: 'init' }),
  });
  const res = await fetch(request);
  if (!res.ok) throw new Error('Error creating task');
  const newTask: Task = await res.json();
  return newTask;
}

export async function deleteProject(id: string) {
  const request = new Request(`${projectsURL}/${id}`, {
    method: 'DELETE',
  });
  const res = await fetch(request);
  if (!res.ok) throw new Error('Error deleting project');
}
export async function deleteTask(id: string, projectId: string) {
  const request = new Request(`${projectsURL}/${projectId}/tasks?${id}`, {
    method: 'DELETE',
  });
  const res = await fetch(request);
  if (!res.ok) throw new Error('Error deleting task');
}
