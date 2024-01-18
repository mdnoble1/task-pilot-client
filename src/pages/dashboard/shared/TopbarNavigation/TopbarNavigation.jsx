import { ImBoxAdd } from "react-icons/im";
import { FaSpaceAwesome } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const TopbarNavigation = () => {
  return (
    <div>
      <ul>
        <li className="mb-6">
          <NavLink
            to="/dashboard/addTask"
            className={({ isActive }) =>
              isActive
                ? `text-[#13ab94] flex items-center gap-3 font-bold text-sm uppercase`
                : `text-black flex items-center gap-3 font-bold text-sm uppercase`
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
                ? `text-[#13ab94] flex items-center gap-3 font-bold text-sm uppercase`
                : `text-black flex items-center gap-3 font-bold text-sm uppercase`
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

export default TopbarNavigation;
