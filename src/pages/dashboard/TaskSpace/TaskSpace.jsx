import useTasks from "../../../hooks/useTasks";
import TaskSpaceCard1 from "../TaskSpaceCard1/TaskSpaceCard1";
import TaskSpaceCard2 from "../TaskSpaceCard2/TaskSpaceCard2";
import TaskSpaceCard3 from "../TaskSpaceCard3/TaskSpaceCard3";

const TaskSpace = () => {
  const [tasks] = useTasks();

  const todoTasks = tasks.filter((item) => item.status === "To Do");
  const ongoingTasks = tasks.filter((item) => item.status === "On Going");
  const completedTasks = tasks.filter((item) => item.status === "Completed");

  // console.log(completedTasks)

  return (
    <section>
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 w-11/12 pt-6 hover:pt-0 px-16 hover:px-0 opacity-50 hover:opacity-100 duration-700 ease-in-out mx-auto mt-4 lg:mt-10">
          {/* to do  */}
          <div className="scale-75 hover:scale-100 duration-700 ease-in-out">
            <h2 className="font-bold text-3xl text-gray-500 text-center uppercase mb-6">
              To Do
            </h2>
            <div className="border-2 border-gray-500 h-[800px] overflow-y-scroll ">
              <div>
                {todoTasks?.map((task) => (
                  <TaskSpaceCard1 key={task._id} task={task}></TaskSpaceCard1>
                ))}
              </div>
            </div>
          </div>
          {/* on going  */}
          <div className="scale-75 hover:scale-100 duration-700 ease-in-out">
            <h2 className="font-bold text-3xl text-gray-500 text-center uppercase mb-6">
              On GOing
            </h2>
            <div className="border-2 border-gray-500 h-[800px] overflow-y-scroll ">
              <div>
                {ongoingTasks?.map((task) => (
                  <TaskSpaceCard2 key={task._id} task={task}></TaskSpaceCard2>
                ))}
              </div>
            </div>
          </div>
          {/* completed  */}
          <div className="scale-75 hover:scale-100 duration-700 ease-in-out">
            <h2 className="font-bold text-3xl text-gray-500 text-center uppercase mb-6">
              Completed
            </h2>
            <div className="border-2 border-gray-500 h-[800px] overflow-y-scroll ">
              <div>
                {completedTasks?.map((task) => (
                  <TaskSpaceCard3 key={task._id} task={task}></TaskSpaceCard3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskSpace;
