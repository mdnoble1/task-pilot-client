/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  MdDeleteForever,
  MdDriveFileRenameOutline,
  MdSubtitles,
} from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { FaCalendarAlt, FaFontAwesomeFlag } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTasks from "../../../hooks/useTasks";

const TaskSpaceCard = ({ task }) => {
  // FINISHED TASK

  const axiosSecure = useAxiosSecure();

  

  const { _id, task_name, description, time, date, status, priority } = task || {};


  const [ tasks, refetch ] = useTasks();


  // deleting a task 

  const handleDeleteTask = ( _id ) => {
    // console.log(_id)

    Swal.fire({
      title: "Are You Sure?",
      text: `You Want To Delete The Task?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tasks/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            
            // immediately refetching after deleting 
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Task Deleted Successfully!",
              icon: "success",
            });
          }
        });
      }
    });



  }

  return (
    <section className="border-2 border-[#13ab94] rounded-md w-11/12 mx-auto p-4 my-10 cursor-grab">
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
        <p className="flex items-center gap-2 font-bold text-[#13ab94] text-lg">
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
      <div className="flex items-center justify-end mt-6">
        <button onClick={() => handleDeleteTask(_id)} className="btn btn-outline text-red-700 uppercase font-semibold text-lg">
          Delete <MdDeleteForever className="text-2xl"></MdDeleteForever>
        </button>
      </div>
    </section>
  );
};

export default TaskSpaceCard;
