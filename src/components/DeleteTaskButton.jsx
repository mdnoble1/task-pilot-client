/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useTasks from "../hooks/useTasks";

const DeleteTaskButton = ({ _id }) => {
  const axiosSecure = useAxiosSecure();

  const [tasks, refetch] = useTasks();

  // deleting a task
  const handleDeleteTask = (_id) => {
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
  };

  return (
    <div>
      <button
        onClick={() => handleDeleteTask(_id)}
        className="btn btn-outline text-red-700 uppercase font-semibold text-lg"
      >
        Delete <MdDeleteForever className="text-2xl"></MdDeleteForever>
      </button>
    </div>
  );
};

export default DeleteTaskButton;
