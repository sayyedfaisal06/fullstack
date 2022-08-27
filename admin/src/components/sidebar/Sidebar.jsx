import "./sidebar.scss";
import {
  DashboardOutlined,
  GroupOutlined,
  MovieOutlined,
  CreditCardOutlined,
  PollOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  AccountCircleOutlined,
  LogoutOutlined,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
} from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarItems = [
    {
      title: "Main",
      children: [
        { title: "Dashboard", Icon: DashboardOutlined, path: "/" },
      ],
    },
    {
      title: "Lists",
      children: [
        { title: "Users", Icon: GroupOutlined, path: "/users" },
        { title: "Movies", Icon: MovieOutlined, path: "/movies" },
        {
          title: "Bookings",
          Icon: CreditCardOutlined,
          path: "/bookings",
        },
      ],
    },
    {
      title: "Useful",
      children: [
        { title: "Stats", Icon: PollOutlined, path: "/stats" },
        {
          title: "Notifications",
          Icon: NotificationsOutlined,
          path: "/notifications",
        },
      ],
    },
    {
      title: "Service",
      children: [
        {
          title: "System Health",
          Icon: SettingsSystemDaydreamOutlined,
          path: "/system-health",
        },
        { title: "Logs", Icon: PsychologyOutlined, path: "/logs" },
      ],
    },
    {
      title: "User",
      children: [
        {
          title: "Settings",
          Icon: SettingsOutlined,
          path: "/settings",
        },
        {
          title: "Profile",
          Icon: AccountCircleOutlined,
          path: "/profile",
        },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {sidebarItems.map(({ title, children }, index) => (
            <div key={index}>
              <p className="title">{title}</p>
              <ul>
                {children.map(({ title, Icon, path }, index) => (
                  <Link to={path} className="link" key={index}>
                    <li
                      className={
                        path === pathname ? "activeLi" : "Li"
                      }
                    >
                      <Icon className="icon" />
                      <span>{title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <li className="Li">
            <LogoutOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div>color options:</div>
        <div className="options">
          <div className="colorOption white"></div>
          <div className="colorOption dark"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
