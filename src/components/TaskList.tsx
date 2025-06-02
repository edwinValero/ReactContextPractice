import type { Task } from '../types/ProjectType';
import NewTask from './NewTask';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[];
  projectId: string;
}

function TaskList({ tasks, projectId }: Props) {
  return (
    <ul className='w-full'>
      {tasks.map((task) => (
        <li
          key={task.id}
          className='p-4 mt-2 bg-gray-100 text-blue-900 rounded-lg hover:bg-gray-300 transition '
        >
          <TaskCard task={task} projectId={projectId}></TaskCard>
        </li>
      ))}
      <li className='p-4 mt-2 bg-gray-100 text-blue-900 rounded-lg hover:bg-gray-300 transition '>
        <NewTask projectId={projectId} />
      </li>
    </ul>
  );
}

export default TaskList;
