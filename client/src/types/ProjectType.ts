export interface Task {
  name: string;
  id: string;
  status: string;
}

export interface Project {
  name: string;
  id: string;
  tasks: Task[];
}

export type ProjectContextType = {
  projects: Project[];
};

export type ProjectAction =
  | { type: 'LOAD_PROJECTS'; payload: Project[] }
  | { type: 'NEW_PROJECT'; payload: Project }
  | { type: 'NEW_TASK'; payload: { task: Task; id: string } }
  | { type: 'DELETE_TASK'; payload: { id: string; projectId: string } }
  | { type: 'DELETE_PROJECT'; payload: { id: string } };
