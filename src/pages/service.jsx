import styles from "./service.module.css";
import Header from '../components/header.jsx';
import Homebar from "../components/homebar.jsx";
import Five from "../components/Five";
import Six from "../components/Six";
import Eleven from "../components/Eleven";
import Press from "../components/press.jsx";
import TopNavbar from "../components/topNavbar.jsx";

import {
  FaHandHoldingHeart,
  FaBriefcaseMedical,
  FaChartLine,
  FaHeartbeat,
  FaGift,
  FaPlay,
} from "react-icons/fa";

import child1 from "../assets/child-1.jpg";
import child2 from "../assets/child-2.jpg";
import child3 from "../assets/child-3.jpg";

function Service() {
  return (
    <div>
      <Header/>
      <Homebar/>

      <div className={styles.back}>
        <div className={styles.herosection}>
          <h1>Services</h1>
          <p className={styles.title}>
            Home &middot; <span className={styles.sertitle}>Services</span>
          </p>
        </div>
      </div>

      <div className={styles.servicesRow}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li>
              <FaHandHoldingHeart className={styles.icon} /> Fund Raised & Donation
            </li>
            <li>
              <FaBriefcaseMedical className={styles.icon} /> Medical Treatment Help
            </li>
            <li>
              <FaChartLine className={styles.icon} /> Development Programs
            </li>
            <li>
              <FaHeartbeat className={styles.icon} /> Child Medical Research
            </li>
            <li>
              <FaGift className={styles.icon} /> Corporate Gifts Donate
            </li>
          </ul>
          <button className={styles.moreBtn}>More Services</button>
        </div>

        <div className={styles.Wrapper}>
          <div className={styles.topImage}>
            <img src={child1} alt="Video Thumbnail" />
            <div className={styles.playIcon}>
              <FaPlay />
            </div>
          </div>

          <div className={styles.bottomImages}>
            <img src={child2} alt="Child Group" />
            <img src={child3} alt="Child Speaking" />
          </div>
        </div>
      </div>

      <Five />
      <Six />
      <Eleven />
      <Press />
    </div>
  );
}

export default Service;
