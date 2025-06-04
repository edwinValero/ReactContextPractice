import { useState } from 'react';
import { createProject } from '../services/projectAPI';
import { useProjectsContext } from './useProjectContext';

export function useNewProject() {
  const [projectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { dispatch } = useProjectsContext();

  const handleSave = async () => {
    if (!projectName.trim()) return;
    try {
      setLoading(true);
      setError('');
      const project = await createProject(projectName.trim());
      dispatch({ type: 'NEW_PROJECT', payload: project });
      setProjectName('');
    } catch (e) {
      console.error(e);
      setError('Error saving the project');
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    handleSave,
    projectName,
    setProjectName,
  };
}
