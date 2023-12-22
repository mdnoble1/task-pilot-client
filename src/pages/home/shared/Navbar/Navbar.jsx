/* eslint-disable react/no-unescaped-entities */
import logo from "../../../../assets/icons/task-pilot-logo1.png";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl bg-[#13ab94] navbar flex items-center justify-between px-4 lg:px-16 py-2 lg:py-6 lg:mt-4 lg:rounded-t-md">
      <div>
        <img className="w-36 lg:w-52" src={logo} alt="logo" />
      </div>
      <div className="lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <FiMenu className="text-2xl text-white"></FiMenu>
        </label>
      </div>

      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `text-blue-400 border-b-2 border-b-blue-400 flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className="btn btn-outline font-semibold text-lg text-white uppercase">Let's Explore</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
