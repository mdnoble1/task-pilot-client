import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/shared/Sidebar/Sidebar";
import Topbar from "../pages/dashboard/shared/Topbar/Topbar";

const Dashboard = () => {
  return (
    <section>
      <Helmet>
        <title>Task Pilot | Dashboard</title>
      </Helmet>
      <div className="md:grid grid-cols-4">
        <div className="hidden md:block">
          <Sidebar className=""></Sidebar>
        </div>
        <div className="col-span-3">
          <div className="md:hidden">
            <Topbar></Topbar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;