import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="top-header">
      <div className="header-bottom">
        <div className="head">
          <img
            src={logo}
            alt="Humanity Alliance Organization Logo"
            className="logo-header"
          />
          <h1 className="org-name">
            <span className="red">HUMANITY</span>{" "}
            <span className="orange">ALLIANCE</span>{" "}
            <span className="green">ORGANIZATION</span>
          </h1>
        </div>

        <div className="info-boxes">
          <div className="info-box">
            <span className="icon">
              <FaClock />
            </span>
            <div>
              <strong>Opening Hours</strong>
              <p>Mon - Sat: 10:00AM to 06:00PM</p>
            </div>
          </div>
          <div className="info-box">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <strong>Our Address</strong>
              <p>24 Griffin canal Road, Lahore</p>
            </div>
          </div>
          <div className="info-box">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <div>
              <strong>Contact Us</strong>
              <p>+92 336 4304928</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
