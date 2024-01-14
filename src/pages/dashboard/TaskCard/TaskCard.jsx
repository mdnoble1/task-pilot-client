/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

const TaskCard = ({ task }) => {
  return (
    <section className="my-4">
      <div
        className={`cursor-grab rounded-md drop-shadow-2xl bg-slate-100 w-10/12 mx-auto border border-slate-400`}
      >
        <div className="lg:flex items-center justify-between w-11/12 h-32 md:h-36 lg:h-24 mx-auto text-center lg:text-left">
          <h2 className="font-bold text-black text-sm md:text-lg mb-2 h-16 md:h-20 flex lg:items-center mt-4 lg:mt-0">
            {task.task_name}
          </h2>
          <button className="font-bold text-2xl md:text-3xl text-red-600 btn btn-ghost btn-circle mb-4 lg:mb-0">
            <MdDeleteForever></MdDeleteForever>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
