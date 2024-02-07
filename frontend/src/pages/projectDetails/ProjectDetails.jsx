import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./projectDetails.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const ProjectDetails = () => {
  return (
    <div className="projectDetails">
      <Sidebar />
      <div className="projectDetailsContainer">
        <Navbar />
        <div className="customerDetails">
          <h2>Customer Details</h2>
          <div className="general">
            <ErrorOutlineIcon />
            <h3>General Information</h3>
          </div>
          <div className="form">
            <form action="">
              <div className="left">
                <label htmlFor="name">Customer Name</label>
                <input type="text" id="name" placeholder="Relience" />
                <br />
                <label htmlFor="size">Customer Name</label>
                <input type="text" id="size" placeholder="1-10" />
                <br />
                <label htmlFor="users">Number of Users</label>
                <input type="text" id="users" placeholder="1-100" />
                <br />
                <label htmlFor="manufature">
                  Number of Manufacturing plants
                </label>
                <input type="text" id="manufature" placeholder="2" />
                <select name="" id="">
                  <option value="">India</option>
                  <option value="">Russia</option>
                  <option value="">USA</option>
                </select>
              </div>
              <div className="right">right</div>
            </form>
            <button className="btn">Save Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
