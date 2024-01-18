/* eslint-disable react/prop-types */
import { MdDriveFileRenameOutline, MdSubtitles } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { FaCalendarAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

const TaskDetailModal = ({ modalTask }) => {
  console.log(modalTask.status);

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
    <div className={`modal-box py-12 border-2 ${border}`}>
      <div>
        <h2 className="flex items-center gap-2 font-bold text-black text-lg mb-2">
          <MdDriveFileRenameOutline className="text-3xl text-black"></MdDriveFileRenameOutline>{" "}
          {modalTask.task_name}
        </h2>
        <div className="flex items-start gap-2">
          <MdSubtitles className="text-4xl text-black"></MdSubtitles>
          <p className="font-bold text-gray-500">{modalTask.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className={`flex items-center gap-2 font-bold ${text}  text-lg`}>
          <GrStatusInfo className="text-2xl text-black"></GrStatusInfo>{" "}
          {modalTask.status}
        </p>
        <p className="flex items-center gap-2 font-bold text-black text-lg">
          <FaFontAwesomeFlag className="text-2xl text-black"></FaFontAwesomeFlag>{" "}
          {modalTask.priority}
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className="flex items-center gap-2 font-bold text-gray-500">
          <IoMdTimer className="text-3xl text-black"></IoMdTimer>{" "}
          {modalTask.time}
        </p>
        <p className="flex items-center gap-2 font-bold text-gray-500">
          <FaCalendarAlt className="text-2xl text-black"></FaCalendarAlt>{" "}
          {modalTask.date}
        </p>
      </div>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-outline">Close</button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetailModal;
