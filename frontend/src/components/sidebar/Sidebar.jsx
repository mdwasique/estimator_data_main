import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatasetIcon from "@mui/icons-material/Dataset";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ntt data</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>DashBoard</span>
          </li>
          <li>
            <HomeIcon className="icon" />
            <span>Customer Info</span>
          </li>
          <li>
            <DomainVerificationIcon className="icon" />
            <span>Business Process</span>
          </li>
          <li>
            {/* <CalendarTodayIcon className="icon" /> */}
            <DashboardCustomizeIcon className="icon" />
            <span>Estimator Dashboard</span>
          </li>
          <li>
            <DatasetIcon className="icon" />
            <span>Master Data</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Configuration</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
