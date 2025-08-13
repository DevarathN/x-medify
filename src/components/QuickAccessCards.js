import SearchIcon from "@mui/icons-material/Search";
import { FaUserDoctor } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaHospital, FaAmbulance } from "react-icons/fa";
import { BsCapsule } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
const QuickAccessCards = () => {
  return (
    <div className="quickAccessCards-search">
      <div className="search-div">
        <div className="search-bar">
          <SearchIcon className="search-icon" style={{ display: "flex" }} />
          <input type="text" name="" id="" placeholder="State" />
        </div>
        <div className="search-bar">
          <SearchIcon className="search-icon" style={{ display: "flex" }} />
          <input type="search" name="" id="" placeholder="City" />
        </div>
        <div className="search-button">
          <button className="btn home-btns">
            <SearchIcon className="search-icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
      <div className="quickAccessCards">
        <p style={{ fontSize: "20px" }}>You may be looking for</p>
        <div className="accessCards">
          <div className="cards">
            <FaUserDoctor className="quickAccessCardIcons" />
            <p>Doctors</p>
          </div>
          <div className="cards">
            <ImLab className="quickAccessCardIcons" />
            <p>Labs</p>
          </div>
          <div className="cards">
            <FaHospital className="quickAccessCardIcons" />
            <p>Hospitals</p>
          </div>
          <div className="cards">
            <BsCapsule className="quickAccessCardIcons" />
            <p>Medical Store</p>
          </div>
          <div className="cards">
            <FaAmbulance className="quickAccessCardIcons" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickAccessCards;
