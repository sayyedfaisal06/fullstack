import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const PublicRoute = ({ children }) => {
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");
  if (accessToken) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};

export default PublicRoute;
