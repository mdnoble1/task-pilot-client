import TaskSpaceMain from "../TaskSpaceMain/TaskSpaceMain";

const TaskSpaceList = () => {
  // task category listing
  const statuses = ["To Do", "On Going", "Completed"];

  return (
    <section className="grid grid-cols-3 md:w-9/12 mx-auto my-8 lg:my-20">
      {statuses.map((status, index) => (
        <TaskSpaceMain key={index} status={status}></TaskSpaceMain>
      ))}
    </section>
  );
};

export default TaskSpaceList;
