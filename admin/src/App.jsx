import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./config/ProtectedRoute";
import PublicRoute from "./config/PublicRoute";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import Error from "./pages/error/Error";
import AddMovies from "./pages/add/AddMovies";

const App = () => {
  const ProtectedRoutes = [
    { path: "/", Component: Dashboard },
    { path: "/users", Component: Dashboard },
    { path: "/movies", Component: AddMovies },
  ];

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          index
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        {ProtectedRoutes.map(({ path, Component }, index) => (
          <Route
            path={path}
            element={
              <DashboardLayout>
                <Component />
              </DashboardLayout>
            }
            key={index}
          />
        ))}
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
