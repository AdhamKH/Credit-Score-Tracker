import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = localStorage.getItem("cashDash");
  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
