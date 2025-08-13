import { CiLocationOn } from "react-icons/ci";
import { MdSearch } from "react-icons/md";
import { hospital, HospitalAd } from "../images/images";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { GrPrevious, GrNext } from "react-icons/gr";

const MedicalCentres = () => {
  const [medicalCentresData, setMedicalCentresData] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [numberOfhospitals, setNumberOfHospitals] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [hospitalBookingId, setHospitalBookingId] = useState(false);
  const [dateIndex, setDateIndex] = useState(0);
  const [dateActive, setDateActive] = useState(0);
  const [popUpBooking, setPopUpBooking] = useState(false);
  const [slotTime, setSlotTime] = useState(null);
  const [backgroundDull, setBackgroundDull] = useState(false);
  const [slotWidth, setSlotWidth] = useState(165);
  const [visibleDates, setVisibleDates] = useState(3);
  const [stateOpen, setStateOpen] = useState(false);
  const [cityopen, setCityOpen] = useState(false);
  const gap = 20;
  const slotIimings = [
    {
      label: "Morning",
      slots: ["09:00 AM", "09:30 AM", "10:00 AM", "11:00 AM"],
    },
    {
      label: "Afternoon",
      slots: ["12:00 PM", "12:30 PM", "01:00 PM", "02:00 PM"],
    },
    {
      label: "Evening",
      slots: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
    },
  ];

  const getFilteredSlotsForToday = (slots) => {
    const now = new Date();

    return slots.filter((time) => {
      const slotDate = new Date(`2025-01-01 ${time}`);

      return (
        slotDate.getHours() > now.getHours() ||
        (slotDate.getHours() === now.getHours() &&
          slotDate.getMinutes() > now.getMinutes())
      );
    });
  };
  const getDateLabels = () => {
    const consultationDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      if (i === 0) {
        consultationDays.push({ label: "Today", date });
      } else if (i === 1) {
        consultationDays.push({ label: "Tomorrow", date });
      } else {
        const formattedDate = date.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        consultationDays.push({ label: formattedDate, date });
      }
    }

    return consultationDays;
  };
  const slotBookingDetails = getDateLabels();
  const handleNext = () => {
    if (dateIndex + visibleDates < slotBookingDetails.length) {
      setDateIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (dateIndex > 0) {
      setDateIndex((prev) => prev - 1);
    }
  };
  const capitalizeFirst = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
  };
  const getMedicalCentres = async () => {
    if (!selectedState) {
      return;
    } else {
      setHasSearched(true);
      if (selectedCity && selectedCity !== "City") {
        const hospitalCentresCityRes = await fetch(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        const hospitalCentresCityData = await hospitalCentresCityRes.json();
        setMedicalCentresData(hospitalCentresCityData);
        setNumberOfHospitals(hospitalCentresCityData.length);
      } else {
        const hospitalCentresStateRes = await fetch(
          `https://meddata-backend.onrender.com/data?state=${selectedState}`
        );
        const hospitalCentresStateData = await hospitalCentresStateRes.json();
        setMedicalCentresData(hospitalCentresStateData);
        setNumberOfHospitals(hospitalCentresStateData.length);
      }
    }
  };
  const openPopUp = (timing) => {
    setBackgroundDull(true);
    setPopUpBooking(true);
    setSlotTime(timing);
  };
  const closePopUp = () => {
    setPopUpBooking(false);
    setBackgroundDull(false);
    setSlotTime(null);
  };
  const confirmBooking = () => {
    const requiredHospital = medicalCentresData[hospitalBookingId];
    const bookingDetails = {
      "Hospital Name": requiredHospital["Hospital Name"],
      City: requiredHospital["City"],
      State: requiredHospital["State"],
      "Hospital Type": requiredHospital["Hospital Type"],
      "Hospital overall rating": requiredHospital["Hospital overall rating"],
      bookingDate: slotBookingDetails[dateActive].date
        .toISOString()
        .split("T")[0],

      bookingTime: slotTime,
    };
    const currentBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    currentBookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(currentBookings));
    closePopUp();
  };

  useEffect(() => {
    (async () => {
      try {
        const statesURL = "https://meddata-backend.onrender.com/states";
        const stateRes = await fetch(statesURL);
        const stateData = await stateRes.json();
        setStates(stateData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedState !== "State" && selectedState) {
      (async () => {
        try {
          const citiesURL = `https://meddata-backend.onrender.com/cities/${selectedState}`;
          const cityRes = await fetch(citiesURL);
          const cityData = await cityRes.json();
          setCities(cityData);
        } catch (err) {
          console.log(err);
        }
      })();
    } else {
      setCities([]);
      return;
    }
  }, [selectedState]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlotWidth(220);
        setVisibleDates(1);
      } else if (window.innerWidth < 1025) {
        setSlotWidth(180);
        setVisibleDates(2);
      } else {
        setSlotWidth(165);
        setVisibleDates(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dateIndex, slotWidth]);
  return (
    <div>
      <div
        className={`medicalCentres-container ${backgroundDull ? "dull" : ""}`}
      >
        <div
          style={{
            background:
              "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
            height: "15vh",
          }}
        ></div>
        <div className="search-bar-city-state">
          <div className="search-state" >
            <CiLocationOn className="locationIcon" />
            <div
              className="state-dropdown dropdown-toggle"
              id="state"
              onClick={() => {
                setSelectedCity(null);
                setHasSearched(false);
                setStateOpen((prev) => !prev);
                setCityOpen(false);
              }}
            >
              {selectedState || "State"}
              {stateOpen && (
                <ul>
                  {states.map((state, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedState(state);
                      }}
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="search-city">
            <CiLocationOn className="locationIcon" />
            <div
              className="dropdown-toggle city-dropdown"
              id="city"
              onClick={() => {
                setHasSearched(false);
                setCityOpen((prev) => !prev);
                setStateOpen(false);
              }}
            >
              {selectedCity || "City"}
              {cityopen && (
                <ul>
                  {cities.map((city, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCity(city);
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="search-button">
            <button
              type="submit"
              className="btn home-btns"
              onClick={()=>{getMedicalCentres()}}
              id="searchBtn"
            >
              <MdSearch style={{ fontSize: "20px" }} />
              <span>Search</span>
            </button>
          </div>
        </div>
        {hasSearched && (
          <div className="hospitalNumbers-hospitals-ad">
            {" "}
            <h1>
              {numberOfhospitals} medical centers available in{" "}
              {selectedCity ? selectedCity.toLowerCase() : selectedState.toLowerCase()}
            </h1>
            <span>
              <IoCheckmarkCircleOutline className="checkIcon" />
              Book appointments with minimum wait-time & verified doctor details
            </span>
            <div className="hospitals-ad">
              <div className="hospitals-container">
                {medicalCentresData.map((centre, index) => (
                  <div className="hospitalDetails-slotBooking">
                    <div className="hospitalCentre-details" key={index}>
                      <div className="hospitalDetails-Image">
                        <img src={hospital} alt="" srcset="" />
                      </div>
                      <div className="hospitalDetails-Text">
                        <h3 className="name">
                          {capitalizeFirst(centre["Hospital Name"])}
                        </h3>
                        <p className="state-city">
                          <span className="stateName">{centre["State"]}</span>
                          {", "}
                          <span className="cityName">
                            {capitalizeFirst(centre["City"])}
                          </span>
                        </p>
                        <p className="address">
                          <span style={{ fontWeight: "600" }}>Address:</span>{" "}
                          {centre["Address"]}{" "}
                        </p>
                        <p className="zipCode">
                          <span style={{ fontWeight: "600" }}>Zip-Code:</span>{" "}
                          {centre["ZIP Code"]}
                        </p>
                        <div className="rating">
                          <span style={{ fontWeight: "600" }}>Rating:</span>
                          {Number(centre["Hospital overall rating"]) ? (
                            <Rating
                              readOnly
                              value={centre["Hospital overall rating"]}
                            />
                          ) : (
                            <span>N.A.</span>
                          )}
                        </div>
                      </div>
                      <div className="hospitalBooking">
                        <button
                          className="btn home-btns"
                          onClick={() => {
                            setHospitalBookingId(
                              hospitalBookingId === index ? null : index
                            );
                          }}
                        >
                          Book FREE Center Visit
                        </button>
                      </div>
                    </div>
                    {hospitalBookingId === index && (
                      <div className="slot-booking">
                        <div className="date-slider-buttons">
                          <button
                            className="date-slider-btn btn"
                            onClick={() => handlePrev()}
                            disabled={dateIndex === 0}
                          >
                            <GrPrevious />
                          </button>
                          <div className="date-slider-wrapper">
                            <div
                              className="date-slider"
                              style={{
                                transform: `translateX(-${
                                  dateIndex * (slotWidth + gap)
                                }px)`,
                                transition: "transform 0.4s ease-in-out",
                                display: "flex",
                              }}
                            >
                              {slotBookingDetails.map((item, index) => (
                                <button
                                  key={index}
                                  className={`btn date-details ${
                                    dateActive === index ? "active" : ""
                                  }`}
                                  onClick={() => {
                                    setDateActive(index);
                                  }}
                                >
                                  <p>{item.label}</p>
                                </button>
                              ))}
                            </div>
                          </div>
                          <button
                            className="date-slider-btn btn"
                            onClick={() => handleNext()}
                            disabled={
                              dateIndex + visibleDates ===
                              slotBookingDetails.length
                            }
                          >
                            <GrNext className="nextIcon" />
                          </button>
                        </div>
                        <div className="slots-div">
                          {slotIimings.map(({ label, slots }) => {
                            const isToday =
                              slotBookingDetails[
                                dateActive
                              ].date.toDateString() ===
                              new Date().toDateString();
                            const updatedSlots = isToday
                              ? getFilteredSlotsForToday(slots)
                              : slots;
                            return (
                              <div className="slot-section">
                                <p>{label}</p>
                                <div className="slot-times">
                                  {updatedSlots.length > 0
                                    ? updatedSlots.map((item, index) => (
                                        <button
                                          className="btn slot"
                                          onClick={() => {
                                            openPopUp(item);
                                          }}
                                        >
                                          {item}
                                        </button>
                                      ))
                                    : "No slots available"}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="ad">
                <img src={HospitalAd} alt="Hospital Advertisement" srcset="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {popUpBooking ? (
        <div className="booking-popUp">
          <h4>Are you sure you want to book this slot?</h4>
          <div className="buttons-container">
            <button
              className="btn home-btns"
              onClick={() => confirmBooking(popUpBooking)}
            >
              Yes
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => closePopUp()}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MedicalCentres;
