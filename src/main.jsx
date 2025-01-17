import React, { lazy } from "react";
import * as ReactDOM from "react-dom/client";
import axios from "./axiosConfig";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import AdminHome from "./Components/AdminHome/AdminHome";
// import AdminLogin from "./Components/AdminLogin/AdminLogin";

// import CheckDetails from "./Components/CheckDetails/CheckDetails";
// import SchoolAdmin from "./Components/SchoolAdmin/SchoolAdmin";
const AdminHome = lazy(() => import("./Components/AdminHome/AdminHome"));
const AdminLogin = lazy(() => import("./Components/AdminLogin/AdminLogin"));
const CheckDetails = lazy(() =>
  import("./Components/CheckDetails/CheckDetails")
);
const SchoolAdmin = lazy(() => import("./Components/SchoolAdmin/SchoolAdmin"));
const Home = lazy(() => import("./Components/Home/Home"));
const Activity = lazy(() => import("./Components/Activity/Activity"));
const Safety = lazy(() => import("./Components/Safety/Safety"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const StudentRegister = lazy(() =>
  import("./Components/StudentRegister/StudentRegister")
);
const LoginForm = lazy(() => import("./Components/LoginForm//LoginForm"));
const SchoolRegisterForm = lazy(() =>
  import("./Components/SchoolRegisterForm/SchoolRegisterForm")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>This is my error element</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <StudentRegister />,
      },
      {
        path: "safety",
        element: <Safety />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "schoolregister",
        element: <SchoolRegisterForm />,
      },
      {
        path: "check-details",
        element: <CheckDetails />,
      },
      {
        path: "school-admin",
        element: <SchoolAdmin />,
      },
      {
        path: "admin-login",
        element: <AdminLogin />,
      },
      {
        path: "admin-home",
        element: <AdminHome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
