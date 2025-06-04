import { createContext, useContext } from 'react';
import type { ProjectAction, ProjectContextType } from '../types/ProjectType';

export const ProjectContext = createContext<
  | {
      state: ProjectContextType;
      dispatch: React.Dispatch<ProjectAction>;
    }
  | undefined
>(undefined);

export function useProjectsContext() {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error('useProjects must be used within ProjectProvider');
  return context;
}
