import lightboxLogo from "../assets/lightboxLogo.png";
import angiLogo from "../assets/angiLogo.png";
import censusLogo from "../assets/censusLogo.png";
import inspireLogo from "../assets/inspireLogo.png";
import proNatureLogo from "../assets/proNatureLogo.png";
import styles from "./press.module.css";

export default function Press() {
  return (
    <div className={styles.pressContainer}>
      <h2 className={styles.pressTitle}>We've been mentioned in the press</h2>
      <div className={styles.logoRow}>
        <img src={lightboxLogo} alt="Lightbox" className={styles.logoImage} />
        <img src={angiLogo} alt="Angi" className={styles.logoImage} />
        <img src={censusLogo} alt="Census" className={styles.logoImage} />
        <img src={inspireLogo} alt="Inspire" className={styles.logoImage} />
        <img src={proNatureLogo} alt="ProNature" className={styles.logoImage} />
      </div>
    </div>
  );
}
