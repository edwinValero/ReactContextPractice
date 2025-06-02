import { Trash2Icon } from 'lucide-react';
import type { Task } from '../types/ProjectType';
import { useProjectsContext } from '../contexts/ProjectContext';

interface Props {
  task: Task;
  projectId: string;
}

function TaskCard({ task, projectId }: Props) {
  const { name, status, id } = task;

  const { dispatch } = useProjectsContext();
  const deleteHandler = async () => {
    dispatch({ type: 'DELETE_TASK', payload: { id, projectId } });
  };
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full flex justify-between items-center'>
        <div className='text-xs'>{id}</div>
        <button
          onClick={() => deleteHandler()}
          className='text-gray-500 hover:text-red-600 transition'
          aria-label='Delete'
        >
          <Trash2Icon size={14} />
        </button>
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className=''>{name}</div>
        <div className=''>{status}</div>
      </div>
    </div>
  );
}

export default TaskCard;
