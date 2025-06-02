import { useState } from 'react';
import { useProjectsContext } from '../contexts/ProjectContext';
import { createProject } from '../services/projectAPI';

function NewProject() {
  const [value, setValue] = useState('');
  const { dispatch } = useProjectsContext();

  const handleSave = async () => {
    if (value === '') return;
    try {
      const project = await createProject(value);
      dispatch({ type: 'NEW_PROJECT', payload: project });
      setValue('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h3 className='pb-4'>New project</h3>
      <input
        type='text'
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
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

export default NewProject;
