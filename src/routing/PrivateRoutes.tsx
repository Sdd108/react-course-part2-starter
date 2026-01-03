import useAuthStore from "./store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
