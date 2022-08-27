import {
  MonetizationOnOutlined,
  MovieOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Widget from "../../components/widgets/Widget";
import "./dashboard.scss";

const Dashboard = () => {
  const widgetCards = [
    {
      title: "Users",
      icon: (
        <PersonOutline
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255,0,0,0.2)",
          }}
        />
      ),
      isMoney: false,
      link: "See all users",
      counter: 231,
      percentage: 10,
      isGrowth: "negative",
    },
    {
      title: "Bookings",
      icon: (
        <ShoppingCartOutlined
          className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218,165,32,0.2)",
          }}
        />
      ),
      isMoney: false,
      link: "See all bookings",
      counter: 52,
      percentage: 43,
      isGrowth: "positive",
    },
    {
      title: "Earnings",
      icon: (
        <MonetizationOnOutlined
          className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0,128,0,0.2)",
          }}
        />
      ),
      isMoney: true,
      link: "View net earnings",
      counter: 45256,
      percentage: 13,
      isGrowth: "negative",
    },
    {
      title: "Movies",
      icon: (
        <MovieOutlined
          className="icon"
          style={{
            color: "purple",
            backgroundColor: "rgba(128,0,128,0.2)",
          }}
        />
      ),
      isMoney: false,
      link: "See all movies",
      counter: 24,
      percentage: 24,
      isGrowth: "positive",
    },
  ];

  return (
    <div className="dashboard">
      <div className="widgets">
        {widgetCards.map((widget, index) => (
          <Widget key={index} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
