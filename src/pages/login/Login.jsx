import login from "../../assets/images/login2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  //   const { signInUser } = useAuth();
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const from = location.state?.form?.pathname || "/";
  // console.log(
  //   "state in the location login page",
  //   location.state?.form?.pathname
  // );

  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // const form = event.target;F
    // const email = form.email.value;
    // const password = form.password.value;

    // console.log(email, password);

    //     signInUser(email, password)
    //       .then(() => {
    //         // const user = result.user;
    //         // console.log(user);
    //         //sweetalert
    //         Swal.fire({
    //           icon: "success",
    //           title: "User Successfully Logged In !",
    //           showClass: {
    //             popup: "animate_animated animate_fadeInDown",
    //           },
    //           hideClass: {
    //             popup: "animate_animated animate_fadeOutUp",
    //           },
    //         });
    //         event.target.reset();
    //         navigate(from, { replace: true });
    //       })
    //       .catch(() => {
    //         // console.log(error)

    //         //sweetalert
    //         Swal.fire({
    //           icon: "error",
    //           title: "Email and Password Doesn't Match !",
    //           showClass: {
    //             popup: "animate_animated animate_fadeInDown",
    //           },
    //           hideClass: {
    //             popup: "animate_animated animate_fadeOutUp",
    //           },
    //         });
    //       });
    //     event.target.reset();
    //   };
  };

  return (
    <section className="w-11/12 lg:w-full mx-auto lg:my-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-32">
        <div className="my-10 lg:mt-0 w-full">
          <img className="rounded-lg mx-auto drop-shadow-2xl" src={login} alt="" />
        </div>
        <div className="w-full bg-slate-100 rounded-lg drop-shadow-2xl mx-auto mt-10 lg:mt-0">
          <form
            onSubmit={handleLogin}
            className="card-body lg:px-32 pt-12 lg:pt-32 "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email"
                className="input rounded focus:border-[#13ab94]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Type Your Password"
                  className="input rounded focus:border-[#13ab94] w-full"
                  required
                />
                <span
                  className="absolute top-4 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-outline rounded font-bold text-xl text-white bg-[#13ab94] border-0 hover:opacity-80"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="mt-4 text-center pb-12">
            <p className="font-medium text-lg mb-4">
              New in Task Pilot ? Please{" "}
              <Link to="/register">
                <span className="text-[#13ab94]">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
