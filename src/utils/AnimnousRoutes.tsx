import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { Tlogin } from "../types/loginType";

export const Anonymous = () => {
  const user: any = localStorage.getItem("cashDash");
  console.log("user", user);
  return user ? <Navigate to="/" replace /> : <Outlet />;
};
