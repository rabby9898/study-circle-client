import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import AllAssignment from "../Pages/AllAssignment/AllAssignment";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
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
      {
        path: "/createAssignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/allAssignment",
        element: <AllAssignment></AllAssignment>,
        loader: () => fetch("http://localhost:5000/assignments"),
      },
      {
        path: "/myAssignment",
        element: <MyAssignment></MyAssignment>,
      },
      {
        path: "/submittedAssignment",
        element: <SubmittedAssignment></SubmittedAssignment>,
      },
      {
        path: "/assignmentDetails/:id",
        element: <AssignmentDetails></AssignmentDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/${params.id}`),
      },
      {
        path: "/updateAssignment/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/${params.id}`),
      },
    ],
  },
]);

export default router;
