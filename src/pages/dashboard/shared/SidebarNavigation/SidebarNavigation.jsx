import { ImBoxAdd } from "react-icons/im";
import { FaSpaceAwesome } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <div className="mb-12 lg:mb-32">
      <ul>
        <li className="mb-6">
          <NavLink
            to="/dashboard/addTask"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <ImBoxAdd className="lg:text-2xl"> </ImBoxAdd> Add TAsk
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink
            to="/dashboard/taskSpace"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaSpaceAwesome className="lg:text-2xl"> </FaSpaceAwesome> Task
            Space
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNavigation;
