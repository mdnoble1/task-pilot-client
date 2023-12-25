import useTasks from "../../../hooks/useTasks";
import TaskSpaceCard2 from "../TaskSpaceCard2/TaskSpaceCard2";

const OngoingTask = () => {
  const [tasks] = useTasks();

  const ongoingTasks = tasks.filter((item) => item.status === "On Going");

  return (
    <div className="my-16">
      <h2 className="font-bold text-3xl text-gray-500 text-center uppercase">
        ON going tasks
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto">
        {ongoingTasks?.map((task) => (
          <TaskSpaceCard2 key={task._id} task={task}></TaskSpaceCard2>
        ))}
      </div>
    </div>
  );
};

export default OngoingTask;
