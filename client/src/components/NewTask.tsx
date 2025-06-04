import { useState } from 'react';
import { useProjectsContext } from '../hooks/useProjectContext';
import { createTask } from '../services/projectAPI';

interface Props {
  projectId: string;
}

function NewTask({ projectId }: Props) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { dispatch } = useProjectsContext();

  const handleSave = async () => {
    if (!value.trim()) return;
    try {
      setLoading(true);
      setError('');
      const task = await createTask(value.trim(), projectId);
      dispatch({ type: 'NEW_TASK', payload: { task: task, id: projectId } });
      setValue('');
    } catch (e) {
      console.error(e);
      setError('Error saving the task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-col gap-2 items-center'>
      <h3 className='text-lg text-black font-bold'>New task</h3>
      <input
        type='text'
        className='w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
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
          create a new task
        </p>
      )}
      {loading && (
        <span className='bg-gray-100 text-sm p-2 text-blue-700 rounded-md'>
          Saving...
        </span>
      )}
      {error && (
        <span className='bg-red-100 text-sm text-red-700 p-2 rounded-md'>
          {error}
        </span>
      )}
    </div>
  );
}

export default NewTask;
