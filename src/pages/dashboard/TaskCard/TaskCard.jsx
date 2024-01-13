/* eslint-disable react/prop-types */
import {
  MdDeleteForever,
} from "react-icons/md";

const TaskCard = ({ task }) => {
  return (
    <section className="my-2">
      <div
        className={`cursor-grab rounded-md drop-shadow-2xl bg-slate-100 px-4 py-3 w-10/12 border border-slate-400`}
      >
        <div>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold text-black text-sm md:text-base mb-2">
              {task.task_name}
            </h2>
            <button className="font-bold text-3xl text-red-600 btn btn-ghost btn-circle">
              <MdDeleteForever></MdDeleteForever>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
