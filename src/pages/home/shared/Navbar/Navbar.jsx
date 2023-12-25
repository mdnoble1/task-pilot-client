/* eslint-disable react/no-unescaped-entities */
import logo from "../../../../assets/icons/task-pilot-logo1.png";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
        // navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-screen-2xl bg-[#13ab94] navbar flex items-center justify-between px-4 lg:px-16 py-2 lg:py-6 lg:mt-4 lg:rounded-md">
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
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
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
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Register
            </NavLink>
          </li>
          <div className="mt-4">
            {user && (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-12 rounded-full border-2 border-white">
                        <img src={user.photoURL} />
                      </div>
                    </label>
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-center text-white uppercase">
                      {user.displayName}
                    </span>
                    <div className="text-center">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-xs btn-outline text-[#13a0fe]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
