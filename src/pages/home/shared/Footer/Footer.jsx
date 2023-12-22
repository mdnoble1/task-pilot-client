import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import logo from "../../../../assets/icons/task-pilot-logo1.png";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#13ab94] lg:rounded-t-md lg:px-32">
        <div className="text-white text-center pt-8 lg:py-16">
          <img className="w-40 lg:w-52 mx-auto mb-4 lg:mb-8" src={logo} alt="" />
          <h2 className="font-medium text-xl lg:text-2xl mb-2 lg:mb-6 uppercase">
            CONTACT US
          </h2>
          <p className="font-medium lg:text-xl">
            Task Pilot Society, Air Task PS 2193
          </p>
          <p className="font-medium lg:text-xl">+00 123456789</p>
          <p className="font-medium lg:text-xl">info@taskpilot.project</p>
        </div>
        <div className="w-[1px] h-52 my-auto bg-white mx-auto hidden lg:block"></div>
        <div className="text-white text-center lg:text-xl py-6 lg:py-24">
          <h2 className="font-medium text-2xl lg:text-3xl mb-6">
            Follow US On
          </h2>
          <div className="flex items-center justify-center gap-8 text-2xl md:text-3xl">
            <NavLink>
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaInstagramSquare />
            </NavLink>
            <NavLink>
              <FaTwitterSquare />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[#13ab94] text-center py-2">
        <p className="font-medium text-xs md:text-lg text-white border-t-2 border-t-white pt-2">
          Copyright © mdnoble.wd@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
