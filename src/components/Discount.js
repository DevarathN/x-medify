import { Discount_100_Off, Discount_30percent_Off } from "../images/images";
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
const Discount = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobile, setMobile] = useState(false);
  const images = [Discount_100_Off, Discount_30percent_Off, Discount_100_Off];
  const slideActive = (index) => {
    setCurrentSlide(index);
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const nextSlide = () => {
    if (currentSlide < 2) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const handleMobView = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleMobView();
    window.addEventListener("resize", handleMobView);
    return () => window.removeEventListener("resize", handleMobView);
  }, [currentSlide, mobile]);
  return (
    <div className="slider">
      <div className="slides-wrapper">
        {mobile && (
          <>
            <button className="btn slideBtns prevBtn" type="button">
              <GrPrevious onClick={prevSlide} />
            </button>
            <button className="btn slideBtns nextBtn" type="button">
              <GrNext onClick={nextSlide} />
            </button>
          </>
        )}

        <div
          className="slides"
          style={
            mobile
              ? {
                  transform: `translateX(-${
                    currentSlide * window.innerWidth + currentSlide * 10
                  }px)`,
                }
              : {}
          }
        >
          {images.map((image, index) => (
            <div
              className={`${
                index === currentSlide ? "slide-img active" : "slide-img"
              }`}
              onClick={() => {
                slideActive(index);
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {images.map((image, index) => (
            <div
              className={`dot ${index === currentSlide ? "active" : ""}`}
              key={index}
              onClick={() => {
                slideActive(index);
              }}
            >
              <div
                className={`inner-dot ${
                  index === currentSlide ? "active" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Discount;
