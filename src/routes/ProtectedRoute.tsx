import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const userObj = true; // getUser()
  //   console.log("Current location: ", location);
  return userObj ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location.pathname }} />
  );
};

export default ProtectedRoute;
