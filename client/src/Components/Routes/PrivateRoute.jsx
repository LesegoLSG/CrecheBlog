import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("Private route user:", currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
