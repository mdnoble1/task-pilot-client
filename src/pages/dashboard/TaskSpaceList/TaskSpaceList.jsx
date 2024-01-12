import TaskSpaceMain from "../TaskSpaceMain/TaskSpaceMain";

const TaskSpaceList = () => {
  // task category listing
  const statuses = ["todo", "ongoing", "completed"];

  return (
    <section className="flex justify-center gap-16">
      {statuses.map((status, index) => (
        <TaskSpaceMain key={index} status={status}></TaskSpaceMain>
      ))}
    </section>
  );
};

export default TaskSpaceList;
