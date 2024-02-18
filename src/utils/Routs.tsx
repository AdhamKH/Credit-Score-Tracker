import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/loginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import { Anonymous } from "./AnimnousRoutes";
import Settings from "../pages/settings";
import SingUp from "../pages/singUp";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/home",
        element: <App />,
        children: [
          {
            path: "score-credit",
            element: <Settings />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Navigate to={"/home/score-credit"} />,
      },
    ],
  },
  {
    element: <Anonymous></Anonymous>,
    children: [
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);
