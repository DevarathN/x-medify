import GppGoodIcon from "@mui/icons-material/GppGood";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  const list1 = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];
  const list2 = [
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology",
  ];
  return (
    <div className="footer-container">
      <div className="boxes-container">
        <div className="box box1">
          <div className="medify">
            <GppGoodIcon
              className="medifyIcon"
              style={{
                backgroundColor: "#2AA8FF",
                padding: "4px",
                borderRadius: "4px",
                fontSize: "xx-large",
                color: "#fff",
              }}
            />
            <span style={{ color: "#2AA8FF" }}>Medify</span>
          </div>
          <div className="socials">
            <FaFacebookF className="social-icons" />
            <FaTwitter className="social-icons" />
            <FaYoutube className="social-icons" />
            <FaPinterest className="social-icons" />
          </div>
        </div>
        <div className="box box2">
          <ul>
            {list1.map((item, index) => {
              return (
                <li className="footer-links">
                  <IoIosArrowForward />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box box3">
          <ul>
            {list2.map((item, index) => {
              return (
                <li className="footer-links">
                  <IoIosArrowForward />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box">
          <ul>
            {list1.map((item, index) => {
              return (
                <li className="footer-links">
                  <IoIosArrowForward />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
    </div>
  );
};
export default Footer;
