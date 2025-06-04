import { useProjectsContext } from '../hooks/useProjectContext';
import { useGetProject } from '../hooks/useGetProject';
import NewProject from './NewProject';
import ProjectCard from './ProjectCard';

function ProjectList() {
  const { state } = useProjectsContext();
  const { loading, error } = useGetProject();

  if (loading)
    return (
      <p className='text-center text-2xl text-blue-500'>Loading projects...</p>
    );
  if (error)
    return (
      <p className='text-center text-lg text-red-500'>Error loading projects</p>
    );
  return (
    <ul className='w-full'>
      {state.projects.map((project) => (
        <li
          key={project.id}
          className='p-4 m-4 bg-blue-200 text-blue-900 rounded-lg hover:bg-blue-300 transition'
        >
          <ProjectCard project={project}></ProjectCard>
        </li>
      ))}
      <li className='p-4 m-4 bg-blue-200 text-blue-900 rounded-lg hover:bg-blue-300 transition'>
        <NewProject />
      </li>
    </ul>
  );
}

export default ProjectList;
