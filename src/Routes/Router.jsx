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
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        loader: () =>
          fetch("https://study-circle-server.vercel.app/assignments"),
      },
      {
        path: "/myAssignment",
        element: (
          <PrivateRoute>
            <MyAssignment></MyAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/submittedAssignment",
        element: (
          <PrivateRoute>
            <SubmittedAssignment></SubmittedAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignmentDetails/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-circle-server.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/updateAssignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-circle-server.vercel.app/assignments/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
