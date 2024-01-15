/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import DeleteTaskButton from "../../../components/deleteTaskButton";

const TaskCard = ({ task }) => {
  const { _id, task_name } = task || {};

  // react dnd dragging a card
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(isDragging);

  return (
    <section className="my-4">
      <div
        ref={drag}
        className={`cursor-grab rounded-md drop-shadow-2xl bg-slate-100 w-11/12 mx-auto border border-slate-400`}
      >
        <div className="lg:flex items-center justify-between w-11/12 h-32 md:h-36 lg:h-24 mx-auto text-center lg:text-left">
          <h2 className="font-bold text-black text-sm md:text-lg mb-2 h-16 md:h-20 flex lg:items-center mt-4 lg:mt-0">
            {task_name}
          </h2>
          <DeleteTaskButton _id={_id}></DeleteTaskButton>
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
