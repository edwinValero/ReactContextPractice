import { useState } from 'react';
import { useProjectsContext } from '../contexts/ProjectContext';
import { createProject } from '../services/projectAPI';

function NewProject() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { dispatch } = useProjectsContext();

  const handleSave = async () => {
    if (!value.trim()) return;
    try {
      setLoading(true);
      setError('');
      const project = await createProject(value.trim());
      dispatch({ type: 'NEW_PROJECT', payload: project });
      setValue('');
    } catch (e) {
      console.error(e);
      setError('Error saving the project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <p className='text-xl text-black font-bold'>New project</p>

      <input
        type='text'
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.currentTarget.blur();
          }
        }}
        disabled={loading}
      />
      {!loading && !error && (
        <p className='text-sm text-gray-500 mt-2'>
          Press{' '}
          <span className='px-1 py-0.5 border rounded text-xs'>Enter</span> to
          create a new project
        </p>
      )}
      {loading && <span className='text-sm text-blue-500'>Saving...</span>}
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </div>
  );
}

export default NewProject;
