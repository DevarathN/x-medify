import { LatestNewsImage, LatestNewsCardAuthor } from "../images/images";
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(300);
  const [multiplicationFactor, setMultiplicationFactor] = useState(75);
  const news = Array.from({ length: 3 }, () => ({
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    date: "March 31, 2022",
    category: "Medical",
    author: "Rebecca Lee",
  }));
  const slideActive = (index) => {
    setCurrentSlide(index);
  };
  const prevCard = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const nextCard = () => {
    if (currentSlide < 2) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const handleMobView = () => {
      if (window.innerWidth < 370) {
        setCardWidth(250);
        setMultiplicationFactor(60);
        setMobile(true);
      } else if (window.innerWidth < 768) {
        setCardWidth(300);
        setMultiplicationFactor(75);

        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleMobView();
    window.addEventListener("resize", handleMobView);
    return () => window.removeEventListener("resize", handleMobView);
  }, [currentSlide, mobile, multiplicationFactor]);
  return (
    <div className="latestNews-container">
      <p style={{ color: "#2aa7ff", fontWeight: "600" }}>Blog & News</p>
      <h2>Read Our Latest News</h2>
      <div className="slider-buttons">
        {mobile && (
          <>
            <button
              className="btn prevButton"
              type="button"
              disabled={currentSlide < 1}
              onClick={(e) => {
                e.preventDefault();
                prevCard();
              }}
            >
              <GrPrevious />
            </button>
            <button
              className="btn nextButton"
              type="button"
              disabled={currentSlide === 2}
              onClick={nextCard}
            >
              <GrNext />
            </button>
          </>
        )}
      </div>

      <div className="latestNewsCards-container">
        <div
          className="cards-slider"
          style={{
            transform: `translateX(-${
              currentSlide * cardWidth + currentSlide * multiplicationFactor
            }px)`,
            transition: "transform 0.5s ease-in-out",
            display: "flex",
          }}
        >
          {news.map((card, index) => {
            return (
              <div className="latestNews-cards" key={index}>
                <img src={LatestNewsImage} alt="" srcset="" />
                <div className="latestNewsTextContent">
                  <p style={{ color: "#77829D", fontWeight: "500" }}>
                    {card.category} | {card.date}
                  </p>
                  <span>{card.title}</span>
                  <div className="latestNewsCardAuthor">
                    <img src={LatestNewsCardAuthor} alt="" srcset="" />
                    <span>{card.author}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
