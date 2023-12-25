import useTasks from "../../../hooks/useTasks";
import TaskSpaceCard3 from "../TaskSpaceCard3/TaskSpaceCard3";

const CompletedTask = () => {
  const [tasks] = useTasks();

  const completedTasks = tasks.filter((item) => item.status === "Completed");

  return (
    <div className="my-16">
      <h2 className="font-bold text-3xl text-gray-500 text-center uppercase">
        Completed tasks
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto">
        {completedTasks?.map((task) => (
          <TaskSpaceCard3 key={task._id} task={task}></TaskSpaceCard3>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
