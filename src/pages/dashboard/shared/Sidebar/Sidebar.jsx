import { NavLink, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../../../../assets/icons/task-pilot-logo1.png";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import useAuth from "../../../../hooks/useAuth";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="md:w-48 lg:w-[300px] bg-[#13ab94] flex justify-center fixed h-screen">
      <ul className="mt-6 lg:mt-12">
        <div className="text-black mb-10 lg:mb-20">
          <NavLink to="/">
            <div>
              <img className="w-32 lg:w-60 mb-2" src={logo} alt="" />
            </div>
          </NavLink>
          <p
            className={`font-bold text-sm lg:text-xl tracking-[3px] lg:tracking-[12px] text-center`}
          >
            DASHBOARD
          </p>
        </div>
        <SidebarNavigation></SidebarNavigation>
        <div className="my-10">
          {user && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-full rounded-full border-2 border-black">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="block font-semibold text-sm text-center text-black uppercase">
                    {user.displayName}
                  </span>
                  <div className="text-center">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-xs btn-outline text-black"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="border text-white w-full mb-10"></div>

        {/* shared navigation  */}
        <li className="mb-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaHome className="lg:text-2xl"></FaHome>Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
