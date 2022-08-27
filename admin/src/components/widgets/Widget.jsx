import "./widget.scss";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
const Widget = ({ widget }) => {
  const {
    title,
    icon,
    isMoney,
    link,
    counter,
    percentage,
    isGrowth,
  } = widget;

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {isMoney ? `Rs. ${counter}` : counter}
        </span>
        <span className="link">{link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${isGrowth}`}>
          {isGrowth === "positive" ? (
            <KeyboardArrowUp />
          ) : (
            <KeyboardArrowDown />
          )}
          {percentage}%
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
