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
        className={`font-bold text-xl uppercase ${bg} w-72 h-16 flex items-center justify-center rounded-md`}
      >
        {text}
        <span className="ml-4 bg-white rounded-full px-3 py-1 text-2xl font-bold">
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
