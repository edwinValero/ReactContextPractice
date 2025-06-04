import { useState } from 'react';
import { deleteProject } from '../services/projectAPI';
import { useProjectsContext } from './useProjectContext';

export function useDeleteProject(id: string) {
  const { dispatch } = useProjectsContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteHandler = async () => {
    try {
      setLoading(true);
      await deleteProject(id);
      dispatch({ type: 'DELETE_PROJECT', payload: { id } });
    } catch (error) {
      setError('Error deleting project');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, deleteHandler };
}
