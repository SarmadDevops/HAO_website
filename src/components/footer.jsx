import logo from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo-row">
            <img
              src={logo}
              alt="Humanity Alliance Organization Logo"
              className="logo"
            />
            <h3 className="name">
              <span className="red">Humanity</span>
              <span className="orange"> Alliance</span>
              <span className="green"> Organization</span>
            </h3>
          </div>

          <p className="intro">
            The adus Charity is an organization dedicated to improving the lives
            of those in need through various humanitarian, Peds efforts.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Medical Treatment Help</li>
            <li>Corporate Gifts donate</li>
            <li>Child medical research</li>
            <li>Development programs</li>
            <li>They need your help</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Subscribe Newsletter</h4>
          <p className="intro">
            These agencies specialize leveraging various digital channels, such
            as social media advertising
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright 2025 |{" "}
          <span className="bottom">
            {" "}
            Adus - Fundraising & Charity WordPress Theme
          </span>{" "}
          | All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
