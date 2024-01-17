/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import useTasks from "../../../hooks/useTasks";
import TaskCard from "../TaskCard/TaskCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TaskSpaceMain = ({ status }) => {
  const axiosSecure = useAxiosSecure();

  // loading all tasks
  const [tasks, refetch] = useTasks();

  // console.log(tasks[14])

  // filtering task by status
  const todoTasks = tasks.filter((item) => item.status === "To Do");
  const ongoingTasks = tasks.filter((item) => item.status === "On Going");
  const completedTasks = tasks.filter((item) => item.status === "Completed");

  // console.log(ongoingTasks)
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

  let text = "To Do";
  let bg = "bg-sky-400";
  let tasksToMap = todoTasks;
  // let goTo = "todoTask";

  if (status === "On Going") {
    text = "On Going";
    bg = "bg-yellow-400";
    tasksToMap = ongoingTasks;
    // goTo = "ongoingTask";
  }
  if (status === "Completed") {
    text = "Completed";
    bg = "bg-green-500";
    tasksToMap = completedTasks;
    // goTo = "completedTask";
  }

  const addItemToCard = (id) => {
    // console.log("dropping", id, status);

    const taskStatus = {
      stat: `${status}`,
    };

    axiosSecure.patch(`/tasks/${id}`, taskStatus).then((res) => {
      // console.log(res.data);

      if (res.data.modifiedCount > 0) {
        refetch();
        // console.log(tasks)

        toast.success("Task Status Updated!", {
          style: {
            border: "1px solid #13ab94",
            padding: "16px",
            color: "#000000",
          },
          iconTheme: {
            primary: "#13ab94",
          },
        });
      }
    });
  };

  return (
    <section
      ref={drop}
      className={`rounded-lg px-2 py-4 mx-auto w-full ${
        isOver ? "bg-slate-100" : ""
      } duration-700`}
    >
      <div
        className={`${bg} w-11/12 text-center lg:flex items-center justify-between mx-auto rounded-md px-2 py-3 lg:py-5`}
      >
        <h2 className={`font-bold text-sm lg:text-lg uppercase`}>{text}</h2>
        
          <h2 className="bg-white rounded-full mx-auto lg:mx-0 w-6 h-6 md:w-8 md:h-8 text-sm md:text-base lg:text-lg font-bold mt-2 lg:mt-0">
            {tasksToMap.length}
          </h2>
          
        
      </div>
      <div>
        {tasksToMap.length > 0 &&
          tasksToMap.map((task) => (
            <TaskCard key={task._id} task={task} status={status}></TaskCard>
          ))}
      </div>
    </section>
  );
};

export default TaskSpaceMain;
