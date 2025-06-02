import { useState } from 'react';
import { useProjectsContext } from '../contexts/ProjectContext';
import { createTask } from '../services/projectAPI';

interface Props {
  projectId: string;
}

function NewTask({ projectId }: Props) {
  const [value, setValue] = useState('');
  const { dispatch } = useProjectsContext();

  const handleSave = async () => {
    if (value === '') return;
    try {
      const task = await createTask(value, projectId);
      dispatch({ type: 'NEW_TASK', payload: { task: task, id: projectId } });
      setValue('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-start'>
      <h4 className='pb-2'>New task</h4>
      <input
        type='text'
        className='w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSave();
        }}
      />
    </div>
  );
}

export default NewTask;
