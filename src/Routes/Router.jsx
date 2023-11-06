import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
