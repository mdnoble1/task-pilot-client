import { PiStudentBold } from "react-icons/pi";
import { SiBabylondotjs } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ForWhom = () => {
  return (
    <section className="my-20">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="font-bold text-2xl lg:text-4xl text-black mb-4">
          Empowering Diverse Roles: Who Task Pilot Is For
        </h2>
        <p className="font-semibold text-lg text-gray-500">
          Task Pilot is designed with a diverse range of users in mind, catering
          to professionals and teams across various industries. If you resonate
          with any of the following, Task Pilot is the ideal task management
          solution for you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-11/12 mx-auto my-16">
        {/* card 1 */}
        <div className="w-11/12 md:w-96 mx-auto bg-slate-100 py-12 px-4 rounded-lg drop-shadow-2xl border-2 border-white hover:border-2 hover:border-[#13ab94] duration-500">
          <PiStudentBold className="text-6xl mx-auto mb-6"></PiStudentBold>
          <h2 className="font-bold text-xl text-black mb-3 h-16">
            Empowering Students and Educators
          </h2>
          <div className="ml-4">
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Study Task Coordination
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Personal Goal Tracking
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Time Management Skills
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Accessible Anywhere, Anytime
            </p>
            <NavLink to="/dashboard">
              <button>
                <p className="flex items-center gap-2 font-semibold text-[#13ab94] text-lg mt-6 mb-2">
                  Learn More <FaLocationArrow></FaLocationArrow>
                </p>
              </button>
            </NavLink>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-11/12 md:w-96 mx-auto bg-slate-100 py-12 px-4 rounded-lg drop-shadow-2xl border-2 border-white hover:border-2 hover:border-[#13ab94] duration-500">
          <IoPeopleCircleOutline className="text-6xl mx-auto mb-6"></IoPeopleCircleOutline>
          <h2 className="font-bold text-xl text-black mb-3 h-16">
            Elevating Individual Productivity
          </h2>
          <div className="ml-4">
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Study Task Coordination
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Personal Goal Tracking
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Time Management Skills
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Accessible Anywhere, Anytime
            </p>
            <NavLink to="/dashboard">
              <button>
                <p className="flex items-center gap-2 font-semibold text-[#13ab94] text-lg mt-6 mb-2">
                  Learn More <FaLocationArrow></FaLocationArrow>
                </p>
              </button>
            </NavLink>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-11/12 md:w-96 mx-auto bg-slate-100 py-12 px-4 rounded-lg drop-shadow-2xl border-2 border-white hover:border-2 hover:border-[#13ab94] duration-500">
          <MdEventAvailable className="text-6xl mx-auto mb-6"></MdEventAvailable>
          <h2 className="font-bold text-xl text-black mb-3 h-16">
            Streamlining Event Planning
          </h2>
          <div className="ml-4">
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Study Task Coordination
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Personal Goal Tracking
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Time Management Skills
            </p>
            <p className="flex items-center gap-2 font-semibold text-gray-500 text-lg mb-2">
              <SiBabylondotjs></SiBabylondotjs>Accessible Anywhere, Anytime
            </p>
            <NavLink to="/dashboard">
              <button>
                <p className="flex items-center gap-2 font-semibold text-[#13ab94] text-lg mt-6 mb-2">
                  Learn More <FaLocationArrow></FaLocationArrow>
                </p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
