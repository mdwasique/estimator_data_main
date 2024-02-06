import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SliderComponent from "../../components/slider/Slider";
import DataCards from "../../components/dataCards/DataCards";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="home_container">
            <div className="slider-container">
              <SliderComponent />
              <DataCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
