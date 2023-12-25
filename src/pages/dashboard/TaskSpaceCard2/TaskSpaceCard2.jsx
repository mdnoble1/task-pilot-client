/* eslint-disable react/prop-types */
import { MdDriveFileRenameOutline, MdSubtitles } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { FaCalendarAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";

const TaskSpaceCard = ({ task }) => {
  const { task_name, description, time, date, status, priority } = task || {};

  return (
    <section className="border-2 border-yellow-400 rounded-md w-11/12 mx-auto p-4 my-10 cursor-grab">
      <div>
        <h2 className="flex items-center gap-2 font-bold text-black text-lg mb-2">
          <MdDriveFileRenameOutline className="text-2xl text-black"></MdDriveFileRenameOutline>{" "}
          {task_name}
        </h2>
        <p className="flex items-center gap-2 font-bold text-gray-500">
          <MdSubtitles className="text-2xl text-black"></MdSubtitles>{" "}
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <p className="flex items-center gap-2 font-bold text-yellow-400 text-lg">
          <GrStatusInfo className="text-2xl text-black"></GrStatusInfo> {status}
        </p>
        <p className="flex items-center gap-2 font-bold text-black text-lg">
          <FaFontAwesomeFlag className="text-2xl text-black"></FaFontAwesomeFlag>{" "}
          {priority}
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className="flex items-center gap-2 font-bold text-gray-500">
          <IoMdTimer className="text-2xl text-black"></IoMdTimer> {time}
        </p>
        <p className="flex items-center gap-2 font-bold text-gray-500">
          <FaCalendarAlt className="text-2xl text-black"></FaCalendarAlt> {date}
        </p>
      </div>
    </section>
  );
};

export default TaskSpaceCard;
