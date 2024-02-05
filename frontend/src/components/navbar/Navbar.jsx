import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="oppp">
          <div className="items">
            <div className="logo">
              <img src="/ntt_register_image.png" alt="NTT" />
            </div>
            <div className="item">
              <span className="active">Opportunties Dashboard</span>
            </div>
            <div className="item">
              <span>Files</span>
              <KeyboardArrowDownIcon className="icon" />
            </div>
            <div className="item">
              <span>Calender</span>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="search">
            <SearchIcon className="icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <AccountCircleIcon className="icon" />
            <span>Sample User</span>
            <KeyboardArrowDownIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
