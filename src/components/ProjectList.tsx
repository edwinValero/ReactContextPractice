import { useProjectsContext } from '../contexts/ProjectContext';
import NewProject from './NewProject';
import ProjectCard from './ProjectCard';

function ProjectList() {
  const { state } = useProjectsContext();
  return (
    <ul className='w-full'>
      {state.map((project) => (
        <li
          key={project.id}
          className='p-4 m-4 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition'
        >
          <ProjectCard project={project}></ProjectCard>
        </li>
      ))}
      <li className='p-4 m-4 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition'>
        <NewProject />
      </li>
    </ul>
  );
}

export default ProjectList;
