import styles from "./about.module.css";
import Homebar from '../components/homebar.jsx';
import Meet from "../components/meet.jsx";
import Charity from "../components/charity.jsx";
import Intro from "../components/intro.jsx";
import Press from "../components/press.jsx";
import TopNavbar from "../components/topNavbar.jsx";
import Header from '../components/header.jsx';
import Two from "../components/Two";
import Six from "../components/Six";
import Eleven from "../components/Eleven";

export default function About() {
  return (
    <div>
      <Header/>
      <Homebar/>
      <div className={styles.back}>
        <div className={styles.herosection}>
          <h1><span className={styles.sertitle}>About</span> us</h1>
          <p className={styles.title}>
            Home &middot; <span className={styles.sertitle}>Services</span>
          </p>
        </div>
      </div>

      <Two/>
      <Six/>
      <Meet/>
      <Charity/>
      <Intro/>
      <Eleven/>
      <Press/>
    </div>
  )
}
