import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { hospital, HospitalAd } from "../images/images";
import Rating from "@mui/material/Rating";
const MyBookings = () => {
  const [myBookings, setMyBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );
  const [filteredBookings, setFilteredBookings] = useState(myBookings);
  const capitalizeFirst = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
  };
  const getSearchedHospitals = (searchText) => {
    const filteredBookings = myBookings.filter((hospital, index) =>
      hospital["Hospital Name"].toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBookings(filteredBookings);
  };
  useEffect(() => {}, [myBookings]);
  return (
    <div
      style={{
        background:
          "linear-gradient(81deg,#eff5fe 9.01%,rgba(241, 247, 255, 0.47) 89.11%)",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
        }}
      >
        <div className="bookingHeading-searchHospitals">
          <h1 style={{ color: "#fff", fontFamily: "Ubuntu,sans-serif" }}>
            My Bookings
          </h1>
          <div className="search-hospitals-container">
            <div className="search-hospitals">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search Hospitals"
                onChange={(e) => {
                  getSearchedHospitals(e.target.value);
                }}
              />
            </div>
            <div className="search-hospitals-btn">
              <button className="btn home-btns" type="button">
                <SearchIcon />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bookedHospitals-ad">
        <div className="bookedHospitals-container">
          {filteredBookings.map((booking, index) => (
            <div className="bookedHospital">
              <div className="bookedHospital-details" key={index}>
                <div className="bookedHospital-Image">
                  <img src={hospital} alt="" srcset="" />
                </div>
                <div className="bookedHospital-Text">
                  <h3 className="name">
                    {capitalizeFirst(booking["Hospital Name"])}
                  </h3>
                  <p className="state-city">
                    <span className="stateName">{booking["State"]}</span>
                    {", "}
                    <span className="cityName">
                      {capitalizeFirst(booking["City"])}
                    </span>
                  </p>
                  <p className="type">
                    <span style={{ fontWeight: "600" }}>Hospital Type:</span>{" "}
                    {booking["Hospital Type"]}{" "}
                  </p>

                  <div className="rating">
                    <span style={{ fontWeight: "600" }}>Rating:</span>
                    {Number(booking["Hospital overall rating"]) ? (
                      <Rating
                        readOnly
                        value={booking["Hospital overall rating"]}
                      />
                    ) : (
                      <span>N.A.</span>
                    )}
                  </div>
                </div>
                <div className="bookedTime-date">
                  <button type="button" className="btn btn-outline-primary">
                    {booking["bookingDate"]}
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    {booking["bookingTime"]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ad">
          <img src={HospitalAd} alt="Hospital Advertisement" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
