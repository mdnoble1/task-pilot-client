import useTasks from "../../../hooks/useTasks";
import TaskSpaceCard1 from "../TaskSpaceCard1/TaskSpaceCard1";
import TaskSpaceCard2 from "../TaskSpaceCard2/TaskSpaceCard2";
import TaskSpaceCard3 from "../TaskSpaceCard3/TaskSpaceCard3";

const TaskSpace = () => {
  const [ tasks, refetch ] = useTasks();

  const todoTasks = tasks.filter((item) => item.status === "To Do");
  const ongoingTasks = tasks.filter((item) => item.status === "On Going");
  const completedTasks = tasks.filter((item) => item.status === "Completed");

  // console.log(todoTasks)

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto my-16">
        {/* to do  */}
        <div>
          <h2 className="font-bold text-3xl text-gray-500 text-center uppercase">
            To Do
          </h2>
          {todoTasks?.map((task) => (
            <TaskSpaceCard1 key={task._id} task={task}></TaskSpaceCard1>
          ))}
        </div>
        {/* on going  */}
        <div>
          <h2 className="font-bold text-3xl text-gray-500 text-center uppercase">
            On GOing
          </h2>
          {ongoingTasks?.map((task) => (
            <TaskSpaceCard2 key={task._id} task={task}></TaskSpaceCard2>
          ))}
        </div>
        {/* completed  */}
        <div>
          <h2 className="font-bold text-3xl text-gray-500 text-center uppercase">
            Completed
          </h2>
          {completedTasks?.map((task) => (
            <TaskSpaceCard3 key={task._id} task={task} refetch={refetch}></TaskSpaceCard3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskSpace;
