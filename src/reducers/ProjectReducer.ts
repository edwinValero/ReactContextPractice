import type { Project, ProjectAction } from '../types/ProjectType';

export default function projectReducer(
  state: Project[],
  action: ProjectAction
): Project[] {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return action.payload;
    case 'NEW_PROJECT':
      return [...state, action.payload];
    case 'NEW_TASK':
      return state.map((project) => {
        if (project.id === action.payload.id) {
          return {
            ...project,
            tasks: [...project.tasks, action.payload.task],
          };
        }
        return project;
      });
    case 'DELETE_TASK':
      return state.map((project) => {
        if (project.id === action.payload.projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((p) => p.id != action.payload.id),
          };
        }
        return project;
      });
    case 'DELETE_PROJECT':
      return state.filter((p) => p.id != action.payload.id);
    default:
      return state;
  }
}
