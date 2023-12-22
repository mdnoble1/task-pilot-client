import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-10 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <div className="flex justify-end"></div>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-[#13ab94] w-full rounded-lg border-b-2 border-b-[#13ab94] flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `text-[#13ab94] w-full rounded-lg border-b-2 border-b-[#13ab94] flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? `text-[#13ab94] w-full rounded-lg border-b-2 border-b-[#13ab94] flex items-center justify-center gap-3 font-bold text-xl uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
