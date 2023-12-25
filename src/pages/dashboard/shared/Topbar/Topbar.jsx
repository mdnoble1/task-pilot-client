import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../../../../assets/icons/task-pilot-logo1.png"
import TopbarNavigation from "../TopbarNavigation/TopbarNavigation";
import useAuth from "../../../../hooks/useAuth";

const Topbar = () => {

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
    <div className="navbar bg-[#13ab94] p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-3xl"
          >
            <HiMenuAlt1 />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-2 border-[#13ab94] rounded-box w-52">
            
            <TopbarNavigation></TopbarNavigation>
            <div className="my-4">
          {user && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <p className="btn btn-ghost btn-circle avatar">
                    <div className="w-full rounded-full border-2 border-black">
                      <img src={user.photoURL} />
                    </div>
                  </p>
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

            <div className="border border-[#13ab94] w-11/12 mx-auto mb-4"></div>

            {/* shared navigation  */}
            <li className="mb-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#13a0fe] flex items-center gap-3 font-bold uppercase`
                    : `text-black flex items-center gap-3 font-bold uppercase`
                }
              >
                <FaHome className="text-2xl"></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div>
          <NavLink to="/">
            <div>
              <img className="w-40 lg:w-52" src={logo} alt="" />
            </div>
          </NavLink>
          <p className={`font-bold text-xs tracking-[8px] text-center`}>DASHBOARD</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
