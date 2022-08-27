import "./navbar.scss";
import {
  Search,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  const navbarItems = [
    {
      Icon: LanguageOutlined,
    },
    {
      Icon: NotificationsOutlined,
      count: 7,
    },
    {
      Icon: DarkModeOutlined,
    },
    {
      Icon: FullscreenExitOutlined,
    },
    {
      Icon: ChatBubbleOutlineOutlined,
      count: 10,
    },
    {
      Icon: ListOutlined,
    },
  ];

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
          <Search className="searchIcon" />
        </div>
        <div className="items">
          {navbarItems.map(({ Icon, count }, index) => (
            <div className="item" key={index}>
              <Icon className="icon" />
              {count && count !== 0 ? (
                count <= 9 ? (
                  <div className="counter">{count}</div>
                ) : count > 9 ? (
                  <div className="counter">9+</div>
                ) : null
              ) : null}
            </div>
          ))}
          <div className="itemAvatar">
            <img
              src="https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
