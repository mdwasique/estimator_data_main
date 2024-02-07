import "./widget.scss";
import FeedIcon from "@mui/icons-material/Feed";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Role Master</span>
        <span className="counter">5</span>
        <span className="bottom">+5 from Yesterday</span>
      </div>
      <div className="right">
        <FeedIcon />
      </div>
    </div>
  );
};

export default Widget;
