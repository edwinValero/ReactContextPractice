import { useReducer, type ReactNode } from 'react';
import projectReducer from '../reducers/ProjectReducer';
import { ProjectContext } from '../hooks/useProjectContext';

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(projectReducer, {
    projects: [],
  });
  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}
