import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const ProtectedRoute = ({ children }) => {
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
