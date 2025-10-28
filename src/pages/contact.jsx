import styles from "./contact.module.css";
import Header from "../components/header.jsx";
import map from "../assets/map.png";
import Homebar from "../components/homebar.jsx";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import TopNavbar from "../components/topNavbar.jsx";

export default function Contact() {
  return (
    <div>
      <Header/>
      <Homebar/>
      <div className={styles.back}>
        <div className={styles.herosection}>
          <h1>Contact Us</h1>
          <p className={styles.title}>
            Home &middot; <span className={styles.sertitle}>Contact Us</span>
          </p>
        </div>
      </div>

      <div className={styles.contactWrapper}>
        <div className={styles.contactBox}>
          <FaMapMarkerAlt className={styles.icon} />
          <div>
            <h3>Address Line</h3>
            <p>
              Bowery St, New York, NY 10013, USA <br />
              NY 10013,USA
            </p>
          </div>
        </div>

        <div className={styles.contactBox}>
          <FaPhoneAlt className={styles.icon} />
          <div>
            <h3>Phone Number</h3>
            <p>+ 1255 - 568 - 6523 4374-221</p>
            <p>
              <span className={styles.number}>
                + 1255 - 568 - 6523 4374-221
              </span>
            </p>
          </div>
        </div>

        <div className={styles.contactBox}>
          <FaEnvelope className={styles.icon} />
          <div>
            <h3>Email Address</h3>
            <p>Contact@fakemail.Com</p>
            <p>Info@fakemail.Com</p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.subheading}>Contact Us</p>
          <h2 className={styles.heading}>How Any Question?</h2>
            
            <div className={styles.cont}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Your Name *"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your Email *"
              className={styles.input}
            />
            <input type="text" placeholder="Address" className={styles.input} />
            <input
              type="number"
              placeholder="Amount"
              className={styles.input}
            />
            <textarea
              placeholder="Message..."
              className={styles.textarea}
            ></textarea>
            <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.button}>
              Get in Touch
            </button>
            </div>
            
          </form>
          </div>
          <div className={styles.map}>
          <img src={map} alt="World Map"/>
          </div>
        </div>
      </div>
    </div>
  );
}
