import type { ProjectAction, ProjectContextType } from '../types/ProjectType';

export default function projectReducer(
  state: ProjectContextType,
  action: ProjectAction
): ProjectContextType {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return { ...state, projects: action.payload };
    case 'NEW_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'NEW_TASK':
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === action.payload.id) {
            return {
              ...project,
              tasks: [...project.tasks, action.payload.task],
            };
          }
          return project;
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === action.payload.projectId) {
            return {
              ...project,
              tasks: project.tasks.filter(
                (task) => task.id !== action.payload.id
              ),
            };
          }
          return project;
        }),
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((p) => p.id != action.payload.id),
      };
    default:
      return state;
  }
}
