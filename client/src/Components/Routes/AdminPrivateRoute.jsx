import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("Private route user:", currentUser);
  return currentUser && currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default AdminPrivateRoute;
