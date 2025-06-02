import ProjectList from './components/ProjectList';
import { ProjectProvider } from './contexts/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <div className='min-h-screen w-screen bg-gray-100 flex items-center justify-center'>
        <div className='bg-blue-400 p-4 shadow-2xl w-full max-w-lg'>
          <h1 className='text-2xl font-bold mb-6 text-center'>Project List</h1>
          <ProjectList />
        </div>
      </div>
    </ProjectProvider>
  );
}

export default App;
