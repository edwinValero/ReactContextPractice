import { useNewProject } from '../hooks/useNewProject';

function NewProject() {
  const { projectName, handleSave, setProjectName, loading, error } =
    useNewProject();

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <p className='text-xl text-black font-bold'>New project</p>

      <input
        type='text'
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
        value={projectName}
        autoFocus
        onChange={(e) => setProjectName(e.target.value)}
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

export default NewProject;
