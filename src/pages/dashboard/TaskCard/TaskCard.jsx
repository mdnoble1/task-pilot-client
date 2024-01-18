/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import DeleteTaskButton from "../../../components/deleteTaskButton";
import UpdateTaskButton from "../../../components/UpdateTaskButton";
import ShowDetailButton from "../../../components/ShowDetailButton";

const TaskCard = ({ task, status }) => {
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
        } duration-400 lg:block`}
      >
        <div className="lg:flex lg:items-center justify-between w-11/12 mx-auto text-center lg:text-left">
          <h2 className="font-bold text-black text-xs md:text-base lg:text-lg mb-2 h-16 flex lg:items-center mt-4 lg:mt-0">
            {task_name}
          </h2>
          <div className="flex lg:flex-col items-center justify-center gap-3 md:gap-4 lg:gap-1 md:my-2">
            <ShowDetailButton _id={_id}></ShowDetailButton>
            <div className="block lg:hidden">
              <UpdateTaskButton id={_id} status={status}></UpdateTaskButton>
            </div>
            <DeleteTaskButton _id={_id}></DeleteTaskButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
