/* eslint-disable react/prop-types */
import {
  MdDeleteForever,
  MdDriveFileRenameOutline,
  MdSubtitles,
} from "react-icons/md";
import { SiTask } from "react-icons/si";
import { FaCalendarAlt, FaEdit, FaFontAwesomeFlag } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

const TaskCard = ({ task }) => {
  return (
    <section className="my-2">
      <div
        className={`cursor-grab rounded-md drop-shadow-2xl bg-slate-100 px-4 py-3 w-full border border-slate-400`}
      >
        <div>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold text-black text-sm lg:text-lg mb-2">
              <SiTask className="text-xl text-black"></SiTask> {task.task_name}
            </h2>
            <button className="font-bold text-4xl text-red-600 btn btn-ghost btn-circle">
              <MdDeleteForever></MdDeleteForever>
            </button>
          </div>
          <div className="flex items-start gap-2">
            <MdSubtitles className="lg:w-8 text-xl text-black"></MdSubtitles>
            <p className="font-bold text-gray-500 text-xs lg:text-sm">
              {task.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="flex items-center gap-2 font-bold text-gray-500">
            <IoMdTimer className="text-2xl text-black"></IoMdTimer> {task.time}
          </p>
          <p className="flex items-center gap-2 font-bold text-gray-500">
            <FaCalendarAlt className="text-xl text-black"></FaCalendarAlt>{" "}
            {task.date}
          </p>
          <p className="flex items-center gap-2 font-bold text-black">
            <FaFontAwesomeFlag className="text-xl text-black"></FaFontAwesomeFlag>{" "}
            {task.priority}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
