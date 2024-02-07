import React from "react";
import "./projectStatus.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ProjectStatus = () => {
  return (
    <div className="projectStatus">
      <div className="projectLeft">
        <div className="title">
          <span>New</span>
        </div>
        <div className="title">
          <span>In Progress</span>
        </div>
        <div className="title">
          <span>Completed</span>
        </div>
      </div>
      <div className="projectRight">
        <span>Sort By due Date</span>
        <FilterAltIcon />
      </div>
    </div>
  );
};

export default ProjectStatus;
