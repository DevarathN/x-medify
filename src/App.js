import React from "react";
import "./styles.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import MedicalCentres from "./components/MedicalCentres";
import MyBookings from "./components/MyBookings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            {" "}
          </Route>
          <Route path="/medicalcentres" element={<MedicalCentres />}></Route>
          <Route path="/my-bookings" element={<MyBookings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
