import HeroPage from "./HeroPage";
import Discount from "./Discount";
import Specialization from "./Specialization";
import MedicalSpecialist from "./MedicalSpecialist";
import PatientCaring from "./PatientCaring";
import LatestNews from "./LatestNews";
import AppPromotion from "./AppPromotion";
import Community from "./Community";
import FAQ from "./FAQ";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <HeroPage />

      <Discount />
      <Specialization />
      <MedicalSpecialist />
      <PatientCaring />
      <LatestNews />
      <Community />

      <FAQ />
      <AppPromotion />
      <Footer />
    </div>
  );
};
export default HomePage;
