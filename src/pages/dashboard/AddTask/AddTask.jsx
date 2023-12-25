/* eslint-disable no-unused-vars */
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useContext, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
// import { Helmet } from "react-helmet-async";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import Swal from "sweetalert2";
// import SocialLogin from "../shared/SocialLogin/SocialLogin";
// import { useState } from "react";
// import DateTimePicker from "react-datetime-picker";
// import "react-datetime-picker/dist/DateTimePicker.css";
// import "react-calendar/dist/Calendar.css";
// import "react-clock/dist/Clock.css";

const AddTask = () => {
  // const [value, onChange] = useState();
  // const {
  //   register,
  //   handleSubmit,
  // } = useForm();

  // // const { createUser, updateUserProfile } = useContext(AuthContext);
  // const { createUser, updateUserProfile } = useAuth();
  // const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();

  // // password show and hide
  // const [showPassword, setShowPassword] = useState(false);

  // const onSubmit = (data) => {
  //   // console.log(data);
  //   createUser(data.email, data.password).then((result) => {
  //     const loggedUser = result.user;
  //     // console.log(loggedUser);

  //     updateUserProfile(data.name, data.photoURL)
  //       .then(() => {
  //         // console.log("user profile info updated");
  //         // create user entry in the database
  //         const userInfo = {
  //           name: data.name,
  //           email: data.email,
  //         };
  //         axiosPublic.post("/users", userInfo).then((res) => {
  //           if (res.data.insertedId) {
  //             // console.log('user added to the database')
  //             // reset();
  //             Swal.fire({
  //               position: "center",
  //               icon: "success",
  //               title: "User Created Successfully.",
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //             navigate("/");
  //           }
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   });
  // };

  return (
    <div>
      <div className="lg:flex items-center justify-center lg:gap-32 my-20">
        <div className="w-10/12 bg-slate-100 rounded-lg drop-shadow-2xl mx-auto">
          <form
            // onSubmit={handleSubmit(onSubmit)}
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
                name="name"
                placeholder="Name of The Task"
                className="input rounded focus:border-[#13ab94]"
              />
            </div>
            <div className="form-control">
              <div className="w-full mb-4 mx-auto">
                <h2 className="font-medium lg:text-lg label-text  text-[#444] mb-2">
                  Task Details
                </h2>
                <textarea
                  name="message"
                  className="textarea textarea-md w-full rounded-md focus:border-[#13ab94]"
                />
              </div>
            </div>
            {/* <div>
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Select Schedule
                </span>
              </label>
              <DateTimePicker onChange={onChange} value={value} />
            </div> */}
            <div className="lg:flex items-center justify-between mx-10">
              <div className="form-control mb-6 lg:mb-0">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Select Schedule
                  </span>
                </label>
                <input
                  type="datetime-local"
                  name="name"
                  placeholder="Details of Task"
                  className="input rounded focus:border-[#13ab94]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Select Priority
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="name"
                    placeholder="Details of Task"
                    className=""
                  />{" "}
                  <p className="font-semibold text-lg text-black">High</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="name"
                    placeholder="Details of Task"
                    className=""
                  />{" "}
                  <p className="font-semibold text-lg text-black">Medium</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="name"
                    placeholder="Details of Task"
                    className=""
                  />{" "}
                  <p className="font-semibold text-lg text-black">Low</p>
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
    </div>
  );
};

export default AddTask;
