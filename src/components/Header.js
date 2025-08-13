import GppGoodIcon from "@mui/icons-material/GppGood";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToPage = (route) => {
    navigate(route);
  };
  return (
    <div>
      <div className="banner">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>

      <nav class="navbar navbar-expand-md navbar-light ">
        <a
          class="navbar-brand"
          onClick={() => {
            goToPage("/");
          }}
        >
          <GppGoodIcon
            style={{
              backgroundColor: "#2AA8FF",
              padding: "4px",
              borderRadius: "4px",
              fontSize: "larger",
              color: "#fff",
            }}
          />
          <span>Medify</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav align-items-md-center">
            <li className="nav-item">
              <a
                className={`btn nav-link ${
                  location.pathname === `/medicalcentres` ? "active-link" : ""
                }`}
                onClick={() => {
                  goToPage("/medicalcentres");
                }}
              >
                Find Doctors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Hospitals
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Medicines
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Surgeries
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Software for Provider
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Facilities
              </a>
            </li>
            <li class="nav-item">
              <a
                className={`btn ms-md-3 mt-2 mt-md-0 home-btns ${
                  location.pathname === `/my-bookings` ? "active-button" : ""
                }`}
                onClick={() => {
                  goToPage("/my-bookings");
                }}
              >
                My Bookings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
