/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import DeleteTaskButton from "../../../components/deleteTaskButton";
import UpdateTaskButton from "../../../components/UpdateTaskButton";

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

  // console.log(isDragging);

  return (
    <section className="my-4">
      {/* for larger devices  */}
      <div
        ref={drag}
        className={`cursor-grab rounded-md drop-shadow-2xl bg-slate-100 w-11/12 mx-auto border border-slate-400  ${
          isDragging ? "opacity-40" : "opacity-100"
        } duration-400 hidden md:block`}
      >
        <div className="lg:flex items-center justify-between w-11/12 h-32 md:h-36 lg:h-24 mx-auto text-center lg:text-left">
          <h2 className="font-bold text-black text-sm md:text-lg mb-2 h-16 md:h-20 flex lg:items-center mt-4 lg:mt-0">
            {task_name}
          </h2>
          <DeleteTaskButton _id={_id}></DeleteTaskButton>
        </div>
      </div>
      {/* for small devices  */}
      <div
        className={`cursor-grab rounded-md drop-shadow-2xl bg-slate-100 w-11/12 mx-auto border border-slate-400 duration-400 block md:hidden`}
      >
        <div className="w-11/12 h-32 mx-auto text-center">
          <h2 className="font-bold text-black text-sm mb-2 h-16 flex mt-4">
            {task_name}
          </h2>
          <div className="flex">
            <UpdateTaskButton _id={_id}></UpdateTaskButton>
            <DeleteTaskButton _id={_id}></DeleteTaskButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
