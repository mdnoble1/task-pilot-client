/* eslint-disable react/prop-types */
import { BsRocketTakeoffFill } from "react-icons/bs";

const UpdateTaskButton = ({ _id }) => {
  const handleUpdateTask = (_id) => {
    console.log(_id);
  };

  return (
    <div>
      <button
        onClick={() => handleUpdateTask(_id)}
        className="font-bold text-2xl md:text-3xl text-green-600 btn btn-ghost btn-circle mb-4 lg:mb-0"
      >
        <BsRocketTakeoffFill></BsRocketTakeoffFill>
      </button>
    </div>
  );
};

export default UpdateTaskButton;
