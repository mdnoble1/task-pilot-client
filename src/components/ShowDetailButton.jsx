/* eslint-disable react/prop-types */

import { TbInfoTriangle } from "react-icons/tb";
import useTasks from "../hooks/useTasks";
import { useState } from "react";

const ShowDetailButton = ({ _id }) => {
  const [modalTask, setModalTask] = useState({});
  const [tasks] = useTasks();

  const modalId = `my_modal_${_id}`;

  const handleShowDetail = (_id) => {
    // console.log(_id);

    const selectedTask = tasks.find((item) => item._id == _id);
    // console.log(selectedTask);

    setModalTask(selectedTask);

    const modal = document.getElementById(modalId)

    if(modal) {
      modal.showModal();
    }
  };

  // console.log(modalTask);

  return (
    <section>
      <button
        onClick={() => handleShowDetail(_id)}
        className="text-2xl md:text-3xl text-black btn btn-ghost btn-circle"
      >
        <TbInfoTriangle></TbInfoTriangle>
      </button>

      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalTask.task_name}</h3>
          <p className="py-4">
            {modalTask.description}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default ShowDetailButton;
