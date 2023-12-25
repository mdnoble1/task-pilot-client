import { FaStopwatch, FaHourglassHalf } from "react-icons/fa";
import { IoMdCloudDone } from "react-icons/io";
import { ImBoxAdd } from "react-icons/im";
import { NavLink } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <div>
      <div>
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
            to="/dashboard/todoTask"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaStopwatch className="lg:text-2xl"> </FaStopwatch> Task to do
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink
            to="/dashboard/ongoingTask"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaHourglassHalf className="lg:text-2xl"> </FaHourglassHalf> Ongoing Task
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink
            to="/dashboard/completedTask"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <IoMdCloudDone className="lg:text-2xl"> </IoMdCloudDone> Completed Task
          </NavLink>
        </li>
        
      </div>
    </div>
  );
};

export default SidebarNavigation;
