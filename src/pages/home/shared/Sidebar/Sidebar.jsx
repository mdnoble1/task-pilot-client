import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <div className="flex justify-end"></div>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-blue-400 w-fit rounded-xl border-b-2 border-b-blue-400 flex items-center gap-3 font-bold text-xl uppercase`
                : `nav-text flex items-center gap-3 font-bold text-lg uppercase`
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
                ? `text-blue-400 w-fit rounded-xl  border-b-2 border-b-blue-400 flex items-center gap-3 font-bold text-xl uppercase`
                : `nav-text flex items-center gap-3 font-bold text-lg uppercase`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? `text-blue-400 w-fit rounded-xl  border-b-2 border-b-blue-400 flex items-center gap-3 font-bold text-xl uppercase`
                : `nav-text flex items-center gap-3 font-bold text-lg uppercase`
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
