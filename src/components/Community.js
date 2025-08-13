import { FaHandHoldingHeart } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { PiHospitalFill } from "react-icons/pi";
import { FaUserNurse } from "react-icons/fa6";
const Community = () => {
  return (
    <div className="community-container">
      <div className="community-text">
        <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
        <h2>Our Families</h2>
        <span>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </span>
      </div>
      <div className="community-stats">
        <div className="community-stats-card-container">
          <div className="community-stats-card">
            <FaHandHoldingHeart
              className="icon"
              style={{ backgroundColor: "#ebf7ff", color: "#2aa7ff" }}
            />

            <h2>5000+</h2>
            <span>Happy Patients</span>
          </div>
          <div className="community-stats-card">
            <RiHospitalFill
              className="icon"
              style={{ backgroundColor: "#fff7e6", color: "#ffb200" }}
            />

            <h2>1000+</h2>
            <span>Laboratories</span>
          </div>
        </div>
        <div className="community-stats-card-container">
          <div className="community-stats-card">
            <PiHospitalFill
              className="icon"
              style={{ backgroundColor: "#FFF2F0", color: "#FF684C" }}
            />

            <h2>200+</h2>
            <span>Hospitals</span>
          </div>
          <div className="community-stats-card">
            <FaUserNurse
              className="icon"
              style={{ backgroundColor: "#EBFAF1", color: "#4CD080" }}
            />

            <h2>700+</h2>
            <span>Expert Doctors</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
