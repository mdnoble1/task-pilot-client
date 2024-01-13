import TaskSpaceMain from "../TaskSpaceMain/TaskSpaceMain";

const TaskSpaceList = () => {
  // task category listing
  const statuses = ["todo", "ongoing", "completed"];

  return (
    <section className="grid grid-cols-3 w-11/12 mx-auto justify-center gap-10 my-16">
      {statuses.map((status, index) => (
        <TaskSpaceMain key={index} status={status}></TaskSpaceMain>
      ))}
    </section>
  );
};

export default TaskSpaceList;
