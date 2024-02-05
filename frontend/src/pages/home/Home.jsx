import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="home_container">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
