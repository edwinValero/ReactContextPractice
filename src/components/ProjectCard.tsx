import { useDeleteProject } from '../hooks/useDeleteProject';
import type { Project } from '../types/ProjectType';
import TaskList from './TaskList';
import { Trash2Icon } from 'lucide-react';

interface ProjectCard {
  project: Project;
}

function ProjectCard({ project }: ProjectCard) {
  const { tasks, name, id } = project;
  const { deleteHandler } = useDeleteProject(id);

  return (
    <>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex justify-between items-start'>
          <a className='text-gray-500 text-xs px-2'>{id}</a>
          <button
            onClick={() => deleteHandler()}
            className='text-gray-500 hover:text-red-600 transition'
            aria-label='Delete'
          >
            <Trash2Icon size={18} />
          </button>
        </div>
        <p className='px-2'>{name}</p>
        <TaskList tasks={tasks} projectId={id} />
      </div>
    </>
  );
}

export default ProjectCard;
