import { heroimg } from "../images/images";
import QuickAccessCards from "./QuickAccessCards";
const HeroPage = () => {
  return (
    <div className="hero-cards">
      <div className="hero-div">
        <div className="hero-div-text">
          <p>Skip the travel! Find Online</p>
          <p>
            Medical <span style={{ color: "#2aa7ff" }}>Centers</span>
          </p>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor
          </p>
          <button className="btn hero-div-btn home-btns">Find Centers</button>
        </div>
        <div className="hero-div-img">
          <img src={heroimg} alt="" srcset="" />
        </div>
      </div>
      <QuickAccessCards />
    </div>
  );
};
export default HeroPage;
