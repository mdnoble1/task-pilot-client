/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    // getting the form data

    
    // console.log(data.task_name, data.description, data.schedule, data.priority);
    // console.log(user.email)

    const date = data.schedule.split("T")[0];
    const time = data.schedule.split("T")[1];
    // console.log(date, time);

    // creating the object of form data that I need to post in server
    const task = {
      user_email: user.email,
      task_name: data.task_name,
      description: data.description,
      time,
      date,
      status: "To Do",
      priority: data.priority,
    };

    // posting form data in database
    axiosSecure.post("/tasks", task).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Task Added Successfully !",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      }

      // reset the form after submission
      reset();
    });
  };

  // const handleAddTask = (e) => {
  //   e.preventDefault();

  //   const name = e.target.task_name.value;
  //   const description = e.target.description.value;
  //   const schedule = e.target.schedule.value;

  //   // const time = schedule.split("T")
  //   const date = schedule.split("T")[0];
  //   const time = schedule.split("T")[1];

  //   const priority = e.target.priority.value;

  //   console.log(name, description, date, time, priority);
  // };

  return (
    <section>
      <div className="lg:flex items-center justify-center lg:gap-32 my-20">
        <div className="w-11/12 md:w-3/4 bg-slate-100 rounded-lg drop-shadow-2xl mx-auto border border-[#13ab94]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // onSubmit={handleAddTask}
            className="card-body lg:px-32 py-12 lg:py-32 "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Task Name
                </span>
              </label>
              <input
                type="text"
                name="task_name"
                placeholder="Name of The Task"
                className="input rounded focus:border-[#13ab94]"
                {...register("task_name")}
              />
            </div>
            <div className="form-control">
              <div className="w-full mb-4 mx-auto">
                <h2 className="font-medium lg:text-lg label-text  text-[#444] mb-2">
                  Task Details
                </h2>
                <textarea
                  name="description"
                  className="textarea textarea-md w-full rounded-md focus:border-[#13ab94]"
                  {...register("description")}
                />
              </div>
            </div>
            <div className="lg:flex items-center justify-between mx-10">
              <div className="form-control mb-6 lg:mb-0">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Select Schedule
                  </span>
                </label>
                <input
                  type="datetime-local"
                  name="schedule"
                  {...register("schedule")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Select Priority
                  </span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="High"
                    name="priority"
                    value="High"
                    {...register("priority")}
                  />
                  <label htmlFor="High">High</label>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="Medium"
                    name="priority"
                    value="Medium"
                    {...register("priority")}
                  />
                  <label htmlFor="Medium">Medium</label>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="Low"
                    name="priority"
                    value="Low"
                    {...register("priority")}
                  />
                  <label htmlFor="Low">Low</label>
                </div>
              </div>
            </div>
            <div className="form-control mt-6 mx-auto">
              <input
                className="btn btn-outline rounded w-60 font-bold text-xl text-white bg-[#13ab94] border-0 hover:opacity-80 uppercase"
                type="submit"
                value="Add This Task"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTask;
