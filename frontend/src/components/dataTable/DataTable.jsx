import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import "./dataTable.scss";
const DataTable = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="table-container">
        <div className="search-container">
          <div className="input-wrapper">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search by Status/Name" />
          </div>
          <button className="primary-btn">Search</button>
        </div>
        <div className="tabs-container">
          <div className="tabs-menu-container">
            <ul className="menu">
              <li>New</li>
              <li className="active">In progress</li>
              <li>Completed</li>
            </ul>
          </div>
          <div className="tabs-filter-container">
            <div className="sort-container">
              Sort by: Due date <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className="filter-container">
              <FilterAltOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="table-item-container">
          <div className="table-item">
            <div className="name">Project 1</div>
            <div className="p-bar">
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={80} />
              </Box>
            </div>
            <div className="status">High</div>
            <div className="date">
              <CalendarTodayOutlinedIcon className="icon" />
              13/04/2020
            </div>
            <div className="avatar">
              <AccountCircleOutlinedIcon />
            </div>
            <div className="modify">
              <ModeEditOutlineOutlinedIcon />
              Modify
            </div>
          </div>
          <div className="table-item">
            <div className="name">Project ABC</div>
            <div className="p-bar">
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={55} />
              </Box>
            </div>
            <div className="status">High</div>
            <div className="date">
              <CalendarTodayOutlinedIcon className="icon" />
              25/09/2020
            </div>
            <div className="avatar">
              <AccountCircleOutlinedIcon />
            </div>
            <div className="modify">
              <ModeEditOutlineOutlinedIcon />
              Modify
            </div>
          </div>
          <div className="table-item">
            <div className="name">Project EFG</div>
            <div className="p-bar">
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={20} />
              </Box>
            </div>
            <div className="status">High</div>
            <div className="date">
              <CalendarTodayOutlinedIcon className="icon" />
              30/11/2021
            </div>
            <div className="avatar">
              <AccountCircleOutlinedIcon />
            </div>
            <div className="modify">
              <ModeEditOutlineOutlinedIcon />
              Modify
            </div>
          </div>
          <div className="table-item">
            <div className="name">Project DICV</div>
            <div className="p-bar">
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={30} />
              </Box>
            </div>
            <div className="status green">Low</div>
            <div className="date">
              <CalendarTodayOutlinedIcon className="icon" />
              21/03/2020
            </div>
            <div className="avatar">
              <AccountCircleOutlinedIcon />
            </div>
            <div className="modify">
              <ModeEditOutlineOutlinedIcon />
              Modify
            </div>
          </div>
          <div className="table-item">
            <div className="name">Content</div>
            <div className="p-bar">
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={30} />
              </Box>
            </div>
            <div className="status green">Low</div>
            <div className="date">
              <CalendarTodayOutlinedIcon className="icon" />
              28/02/2021
            </div>
            <div className="avatar">
              <AccountCircleOutlinedIcon />
            </div>
            <div className="modify">
              <ModeEditOutlineOutlinedIcon />
              Modify
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
