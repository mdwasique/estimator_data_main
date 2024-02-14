import React from "react";
import "./userScreen.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SliderComponent from "../../components/slider/Slider";
import DataCards from "../../components/dataCards/DataCards";
import DataTable from "../../components/dataTable/DataTable";

const UserScreen = () => {
  return (
    <div className="user-page">
      <Navbar />
      <div className="user">
        <Sidebar />
        <div className="userContainer">
          <div className="user_container">
            <div className="slider-container">
              <SliderComponent />
              <DataCards />
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserScreen;
