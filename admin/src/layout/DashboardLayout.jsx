import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./dashboardLayout.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className="wrapperContainer">
      <Sidebar />
      <div className="mainWrapper">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
