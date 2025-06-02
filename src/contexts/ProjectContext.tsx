import React, {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import type { Project, ProjectAction } from '../types/ProjectType';
import projectReducer from '../reducers/ProjectReducer';
import { getProjects } from '../services/projectAPI';

const initialProjects: Project[] = [];

const ProjectContext = createContext<
  | {
      state: Project[];
      loading: boolean;
      error: null | string;
      dispatch: React.Dispatch<ProjectAction>;
    }
  | undefined
>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(projectReducer, initialProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const projects = await getProjects();
        dispatch({ type: 'LOAD_PROJECTS', payload: projects });
      } catch (e) {
        console.error(e);
        setError('Error loading projects');
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, []);
  return (
    <ProjectContext.Provider value={{ state, dispatch, loading, error }}>
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
