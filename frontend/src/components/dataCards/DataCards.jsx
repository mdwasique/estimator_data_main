import "./dataCards.scss";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
const DataCards = () => {
  return (
    <div>
      <div className="cards-text-container">
        <div className="primary-text-container">
          <h2 className="primary-text">Dashboard</h2>
        </div>
        <div>
          <button className="primary-btn">+&nbsp; New Program</button>
        </div>
      </div>
      <div className="cards-container">
        <div className="card card1">
          <div className="icon-text-wrapper">
            <strong>New</strong>
            <div className="icon-wrapper1">
              <FeedOutlinedIcon className="icon" />
            </div>
          </div>
          <div className="numbers-text-wrapper">
            <h2 className="number1">5</h2>
            <p>+5 from yesterday</p>
          </div>
        </div>
        <div className="card card2">
          <div className="icon-text-wrapper">
            <strong>Active</strong>
            <div className="icon-wrapper2">
              <PlayArrowOutlinedIcon className="icon" />
            </div>
          </div>
          <div className="numbers-text-wrapper">
            <h2 className="number2">25</h2>
            <p>+8 from yesterday</p>
          </div>
        </div>
        <div className="card card3">
          <div className="icon-text-wrapper">
            <strong>Closed</strong>
            <div className="icon-wrapper3">
              <CheckCircleOutlinedIcon className="icon" />
            </div>
          </div>
          <div className="numbers-text-wrapper">
            <h2 className="number3">16</h2>
            <p>+8 from yesterday</p>
          </div>
        </div>
        <div className="card card4">
          <div className="icon-text-wrapper">
            <strong>Pending</strong>
            <div className="icon-wrapper4">
              <ErrorOutlineOutlinedIcon className="icon" />
            </div>
          </div>
          <div className="numbers-text-wrapper">
            <h2 className="number4">16</h2>
            <p>+8 from yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCards;
