import {
  Doctor_1,
  Doctor_2,
  Doctor_3,
  Doctor_4,
  Doctor_5,
} from "../images/images";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";
const MedicalSpecialist = () => {
  const [startSlide, setStartSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(300);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const totalSlides = 5;
  const detailsOfDoctors = [
    { image: Doctor_1, name: "Dr.Lesley Hull", discipline: "Medicine" },
    { image: Doctor_2, name: "Dr. Ahmad Khan", discipline: "Neurologist" },
    { image: Doctor_3, name: "Dr. Heena Sachdeva", discipline: "Orthopaedic" },
    { image: Doctor_4, name: "Dr. Ankur Sharma", discipline: "Medicine" },
    { image: Doctor_5, name: "Dr. Ahmad Stevens", discipline: "Neurologist" },
  ];
  const prevSlide = () => {
    if (startSlide > 0) {
      setStartSlide((prev) => prev - 1);
    }
  };
  const nextSlide = () => {
    if (visibleSlides > 1) {
      if (visibleSlides - startSlide > 1) {
        setStartSlide((prev) => prev + 1);
      }
    } else {
      if (startSlide < 4) {
        setStartSlide((prev) => prev + 1);
      }
    }
  };
  useEffect(() => {
    const maxStart = totalSlides - visibleSlides;
    if (startSlide > maxStart) {
      setStartSlide(maxStart);
    }
    const handleSlideWidth = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleSlides(1);
        setSlideWidth(300);
      } else if (width < 1024) {
        setVisibleSlides(3);

        setSlideWidth(240);
      } else {
        setVisibleSlides(3);

        setSlideWidth(300);
      }
    };
    handleSlideWidth();
    window.addEventListener("resize", handleSlideWidth);
    return () => window.addEventListener("resize", handleSlideWidth);
  }, [startSlide, slideWidth, visibleSlides]);
  return (
    <div
      className="medicalspecialist-container"
      style={{ backgroundColor: "white" }}
    >
      <h2>Our Medical Specialist</h2>
      <div
        className="sliderWrapper"
        style={{ width: `${slideWidth * visibleSlides + 50}px` }}
      >
        <button
          className="btn slideBtns prevBtn"
          type="button"
          disabled={startSlide === 0}
        >
          <GrPrevious onClick={prevSlide} />
        </button>
        <button
          className="btn slideBtns nextBtn"
          type="button"
          disabled={startSlide >= totalSlides - visibleSlides}
        >
          <GrNext onClick={nextSlide} />
        </button>

        <div
          className="listOfDoctors"
          style={{
            transform: `translateX(-${
              startSlide * slideWidth + startSlide * (50 / 3)
            }px)`,
          }}
        >
          {detailsOfDoctors.map((detail, index) => (
            <div className="doctorDetails">
              <div
                className="doctorImage"
                style={{ width: `${slideWidth}px`, height: `${slideWidth}px` }}
              >
                <img key={index} src={detail.image} alt={`Doctor-${index}`} />
              </div>

              <span className="doctorName">{detail.name}</span>
              <span className="doctorDiscipline ">{detail.discipline}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-dots">
        {Array.from({ length: totalSlides - visibleSlides + 1 }).map(
          (_, index) => (
            <div className={`dot ${startSlide === index ? "active" : ""}`}>
              <div
                className={`inner-dot ${startSlide === index ? "active" : ""}`}
              ></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default MedicalSpecialist;
