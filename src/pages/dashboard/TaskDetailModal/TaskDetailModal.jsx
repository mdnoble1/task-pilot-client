/* eslint-disable react/prop-types */
import { MdDriveFileRenameOutline, MdSubtitles } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { FaCalendarAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

const TaskDetailModal = ({ modalTask }) => {
  // console.log(modalTask.status);

  let border = "border-sky-400";
  let text = "text-sky-400";

  if (modalTask.status === "On Going") {
    border = "border-yellow-400";
    text = "text-yellow-400";
  }
  if (modalTask.status === "Completed") {
    border = "border-green-500";
    text = "text-green-500";
  }

  return (
    <div
      className={`modal-box py-12 border-2 w-11/12 md:w-full mx-auto ${border}`}
    >
      <div>
        <h2 className="flex items-center gap-2 font-bold text-black lg:text-lg mb-2">
          <MdDriveFileRenameOutline className="text-2xl lg:text-3xl text-black"></MdDriveFileRenameOutline>{" "}
          {modalTask.task_name}
        </h2>
        <div className="flex items-start gap-2">
          <MdSubtitles className="text-2xl text-black"></MdSubtitles>
          <p className="font-bold text-gray-500 text-sm lg:text-base flex-1 text-left">
            {modalTask.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className={`flex items-center gap-2 font-bold ${text} lg:text-lg`}>
          <GrStatusInfo className="lg:text-2xl text-black"></GrStatusInfo>{" "}
          {modalTask.status}
        </p>
        <p className="flex items-center gap-2 font-bold text-black lg:text-lg">
          <FaFontAwesomeFlag className="lg:text-2xl text-black"></FaFontAwesomeFlag>{" "}
          {modalTask.priority}
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className="flex items-center gap-2 font-bold text-gray-500 lg:text-base">
          <IoMdTimer className="text-xl lg:text-3xl text-black"></IoMdTimer>{" "}
          {modalTask.time}
        </p>
        <p className="flex items-center gap-2 font-bold text-gray-500 lg:text-base">
          <FaCalendarAlt className="lg:text-2xl text-black"></FaCalendarAlt>{" "}
          {modalTask.date}
        </p>
      </div>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-sm md:btn-md btn-outline">Close</button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetailModal;
