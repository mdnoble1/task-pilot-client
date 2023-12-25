import useTasks from "../../../hooks/useTasks";
import TaskSpaceCard1 from "../TaskSpaceCard1/TaskSpaceCard1";

const TaskToDo = () => {
  const [tasks] = useTasks();

  const todoTasks = tasks.filter((item) => item.status === "To Do");

  return (
    <div className="my-16">
      <h2 className="font-bold text-3xl text-gray-500 text-center uppercase">
        To Do TAsks
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto">
        {todoTasks?.map((task) => (
          <TaskSpaceCard1 key={task._id} task={task}></TaskSpaceCard1>
        ))}
      </div>
    </div>
  );
};

export default TaskToDo;
