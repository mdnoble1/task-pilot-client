import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/shared/Sidebar/Sidebar";
import Topbar from "../pages/dashboard/shared/Topbar/Topbar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <section>
      <Helmet>
        <title>Task Pilot | Dashboard</title>
      </Helmet>
      <div className="md:grid grid-cols-5">
        <div className="hidden md:block">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-4">
          <div className="md:hidden">
            <Topbar></Topbar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};

export default Dashboard;
