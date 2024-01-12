import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../layouts/Dashboard";
import AddTask from "../pages/dashboard/AddTask/AddTask";
// import TaskSpace from "../pages/dashboard/TaskSpace/TaskSpace";
import DashboardLanding from "../pages/dashboard/DashboardLanding/DashboardLanding";
import PrivateRoute from "./PrivateRoute";
import TaskToDo from "../pages/dashboard/TaskToDo/TaskToDo";
import OngoingTask from "../pages/dashboard/OngoingTask/OngoingTask";
import CompletedTask from "../pages/dashboard/CompletedTask/CompletedTask";
import TaskSpaceList from "../pages/dashboard/TaskSpaceList/TaskSpaceList";
import TaskSpaceMain from "../pages/dashboard/TaskSpaceMain/TaskSpaceMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardLanding></DashboardLanding>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      // {
      //   path: "taskSpace",
      //   element: <TaskSpace></TaskSpace>,
      // },
      {
        path: "taskSpace",
        element: <TaskSpaceList></TaskSpaceList>,
      },
      {
        path: "todoTask",
        element: <TaskToDo></TaskToDo>,
      },
      {
        path: "ongoingTask",
        element: <OngoingTask></OngoingTask>,
      },
      {
        path: "completedTask",
        element: <CompletedTask></CompletedTask>,
      },
    ],
  },
]);

export default router;
