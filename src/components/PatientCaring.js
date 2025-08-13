import { PatientCaring_1, PatientCaring_2 } from "../images/images";
import { MdVerified } from "react-icons/md";

const PatientCaring = () => {
  return (
    <div className="patientCaring-container">
      <div className="patientCaringImages">
        <div className="patientCaringImageDiv patientCaringImage_1">
          <img src={PatientCaring_1} alt="" srcset="" />
        </div>
        <div className="patientCaringImageDiv patientCaringImage_2">
          <img src={PatientCaring_2} alt="" srcset="" />
        </div>
      </div>
      <div className="patientCaringText">
        <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
        <h2>Patient Caring</h2>
        <span>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </span>
        <ul>
          <li>
            <MdVerified style={{ color: "#2AA7FF" }} />
            <span>Stay Updated About Your Health</span>
          </li>
          <li>
            <MdVerified style={{ color: "#2AA7FF" }} />
            <span>Check Your Results Online</span>
          </li>
          <li>
            <MdVerified style={{ color: "#2AA7FF" }} />
            <span>Manage Your Appointments</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientCaring;
