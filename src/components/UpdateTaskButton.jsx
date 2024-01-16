/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsRocketTakeoffFill } from "react-icons/bs";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useTasks from "../hooks/useTasks";
import toast from "react-hot-toast";

const UpdateTaskButton = ({ id, status }) => {
  const axiosSecure = useAxiosSecure();
  const [tasks, refetch] = useTasks();

  const handleUpdateTask = (id) => {
    // console.log(id, status);

    let taskStatus = {
      stat: `To Do`,
    };

    if (status === "To Do") {
      taskStatus = {
        stat: `On Going`,
      };
    }
    if (status === "On Going") {
      taskStatus = {
        stat: `Completed`,
      };
    }

    // console.log(taskStatus)

    axiosSecure.patch(`/tasks/${id}`, taskStatus).then((res) => {
      // console.log(res.data);

      if (res.data.modifiedCount > 0) {
        refetch();
        // console.log(tasks)

        toast.success("Task Status Updated!", {
          style: {
            border: "1px solid #13ab94",
            padding: "16px",
            color: "#000000",
          },
          iconTheme: {
            primary: "#13ab94",
          },
        });
      }
    });
  };

  return (
    <div>
      <button
        onClick={() => handleUpdateTask(id)}
        className="font-bold text-2xl md:text-3xl text-[#13ab94] btn btn-ghost btn-circle mb-4 lg:mb-0"
      >
        <BsRocketTakeoffFill></BsRocketTakeoffFill>
      </button>
    </div>
  );
};

export default UpdateTaskButton;
