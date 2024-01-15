/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
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

  // react dnd dropping a card
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToCard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

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


  const addItemToCard = (id) => {
    console.log("dropping", id, status)
  }

  return (
    <section ref={drop} className={`rounded-lg px-2 py-4 mx-auto w-full ${isOver ? "bg-slate-100" : ""} duration-700`}>
      <div
        className={`${bg} w-11/12 text-center lg:flex items-center justify-between mx-auto rounded-md px-1 lg:px-4 py-3 lg:py-5`}
      >
        <h2 className={`font-bold text-sm lg:text-lg uppercase `}>{text}</h2>
        <h2 className="bg-white rounded-full mx-auto lg:mx-0 w-6 h-6 md:w-8 md:h-8 text-sm md:text-base lg:text-lg font-bold mt-2 lg:mt-0">
          {tasksToMap.length}
        </h2>
      </div>
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
