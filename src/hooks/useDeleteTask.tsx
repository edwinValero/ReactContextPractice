import { useState } from 'react';
import { deleteTask } from '../services/projectAPI';
import { useProjectsContext } from './useProjectContext';

export function useDeleteTask() {
  const { dispatch } = useProjectsContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteHandler = async (id: string, projectId: string) => {
    try {
      setLoading(true);
      await deleteTask(id, projectId);
      dispatch({ type: 'DELETE_TASK', payload: { id, projectId } });
    } catch (error) {
      setError('Error deleting task');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, deleteHandler };
}
