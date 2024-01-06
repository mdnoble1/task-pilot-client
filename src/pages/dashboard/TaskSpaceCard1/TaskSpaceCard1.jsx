/* eslint-disable react/prop-types */
import { MdDriveFileRenameOutline, MdSubtitles } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import {
  FaCalendarAlt,
  FaFontAwesomeFlag,
  FaHourglassStart,
} from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import DeleteTaskButton from "../../../components/deleteTaskButton";

const TaskSpaceCard = ({ task }) => {
  // TO DO CARD

  const { _id, task_name, description, time, date, status, priority } =
    task || {};

  return (
    <section className="border-2 border-sky-500 rounded-md w-11/12 mx-auto p-4 my-10 cursor-grab">
      <div>
        <h2 className="flex items-center gap-2 font-bold text-black text-lg mb-2">
          <MdDriveFileRenameOutline className="text-2xl text-black"></MdDriveFileRenameOutline>{" "}
          {task_name}
        </h2>
        <div className="flex items-start gap-2">
          <MdSubtitles className="w-10 text-2xl text-black"></MdSubtitles>
          <p className="font-bold text-gray-500">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <p className="flex items-center gap-2 font-bold text-sky-500  text-lg">
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
      <div className="flex items-center justify-between mt-6">
        <button className="btn btn-outline btn-success uppercase font-semibold text-lg">
          Start<FaHourglassStart></FaHourglassStart>
        </button>
        <DeleteTaskButton _id={_id}></DeleteTaskButton>
      </div>
    </section>
  );
};

export default TaskSpaceCard;
