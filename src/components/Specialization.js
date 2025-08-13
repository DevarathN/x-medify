import { FaHospitalAlt, FaStethoscope } from "react-icons/fa";
import { PiHeartbeatFill } from "react-icons/pi";
import { TbDeviceHeartMonitorFilled } from "react-icons/tb";

import { MdBloodtype } from "react-icons/md";
import { MdPsychology } from "react-icons/md";
import { RiHospitalFill } from "react-icons/ri";
import { FaXRay } from "react-icons/fa6";
const Specialization = () => {
  return (
    <div className="specialization-container">
      <h2>Find By Specialization</h2>
      <div className="specialization-card-container">
        <div className="row-1">
          <div className="specialization-cards">
            <FaHospitalAlt className="specializationIcons" />
            <p>Dentistry</p>
          </div>
          <div className="specialization-cards">
            <FaStethoscope className="specializationIcons" />
            <p>Primary Care</p>
          </div>
          <div className="specialization-cards">
            <PiHeartbeatFill className="specializationIcons" />
            <p>Cardiology</p>
          </div>
          <div className="specialization-cards">
            <TbDeviceHeartMonitorFilled className="specializationIcons" />
            <p>MRI Resonance</p>
          </div>
        </div>
        <div className="row-2">
          <div className="specialization-cards">
            <MdBloodtype className="specializationIcons" />
            <p>Blood Test</p>
          </div>
          <div className="specialization-cards">
            <MdPsychology className="specializationIcons" />
            <p>Psychologist</p>
          </div>
          <div className="specialization-cards">
            <RiHospitalFill className="specializationIcons" />
            <p>Laboratory</p>
          </div>
          <div className="specialization-cards">
            <FaXRay className="specializationIcons" />
            <p>Xray</p>
          </div>
        </div>
        <button type="button" className="btn viewAllButton home-btns">
          View All
        </button>
      </div>
    </div>
  );
};
export default Specialization;
