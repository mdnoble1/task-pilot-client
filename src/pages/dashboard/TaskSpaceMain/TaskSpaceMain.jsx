/* eslint-disable react/prop-types */
import useTasks from "../../../hooks/useTasks";
import TaskCard from "../TaskCard/TaskCard";

const TaskSpaceMain = ({ status }) => {
  // loading all tasks
  const [tasks] = useTasks();

  // filtering task by status
  const todoTasks = tasks.filter((item) => item.status === "To Do");
  const ongoingTasks = tasks.filter((item) => item.status === "On Going");
  const completedTasks = tasks.filter((item) => item.status === "Completed");

  // console.log(completedTasks)
  // console.log(tasks)
  // console.log(status)

  let text = "to do";
  let bg = "bg-sky-400";
  let tasksToMap = todoTasks;

  if (status === "ongoing") {
    text = "ongoing";
    bg = "bg-yellow-400";
    tasksToMap = ongoingTasks;
  }
  if (status === "completed") {
    text = "completed";
    bg = "bg-green-500";
    tasksToMap = completedTasks;
  }

  return (
    <section className={`rounded-md p-2`}>
      <h2
        className={`font-bold text-xs md:text-sm lg:text-xl uppercase ${bg} w-full flex items-center justify-between rounded-md px-2 lg:px-8 py-2 lg:py-4`}
      >
        {text}
        <span className="bg-white rounded-full px-2 lg:px-3 lg:py-1 text-sm md:text-base lg:text-2xl font-bold">
          {tasksToMap.length}
        </span>
      </h2>
      <div>
        {tasksToMap.length > 0 &&
          tasksToMap.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
          ))}
      </div>
    </section>
  );
};

export default TaskSpaceMain;
