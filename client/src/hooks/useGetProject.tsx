import { useEffect, useState } from 'react';
import { getProjects } from '../services/projectAPI';
import { useProjectsContext } from './useProjectContext';

export function useGetProject() {
  const { dispatch } = useProjectsContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getProjects();
        dispatch({ type: 'LOAD_PROJECTS', payload: projects });
      } catch (e) {
        console.error(e);
        setError('Error loading projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [dispatch]);
  return { loading, error };
}
