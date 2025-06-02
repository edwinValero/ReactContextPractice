import React, {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
  useEffect,
} from 'react';
import type { Project, ProjectAction } from '../types/ProjectType';
import projectReducer from '../reducers/ProjectReducer';
import { getProjects } from '../services/projectAPI';

const initialProjects: Project[] = [];

const ProjectContext = createContext<
  | {
      state: Project[];
      dispatch: React.Dispatch<ProjectAction>;
    }
  | undefined
>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(projectReducer, initialProjects);

  useEffect(() => {
    async function fetchProject() {
      try {
        const projects = await getProjects();
        dispatch({ type: 'LOAD_PROJECTS', payload: projects });
      } catch (e) {
        console.error(e);
      }
    }
    fetchProject();
  }, []);
  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error('useProjects must be used within ProjectProvider');
  return context;
}
