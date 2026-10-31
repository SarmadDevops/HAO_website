import {
  FaStar,
} from "react-icons/fa";

import profileImg from "../assets/leslie.jpg";
import heartGift from "../assets/heartGift.png";
import pinkLeave from "../assets/pinkLeave.png";
export default function Intro() {
  return (
    <div className="testimonial-section">
            <div className="testimonial-card">
              <div className="testimonial-left">
                <img
                  src={profileImg}
                  alt="Leslie Alexander"
                  className="testimonial-img"
                />
                <div className="stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
    
              <div className="testimonial-right">
                <p className="quote">
                  "Climb the mountain not to plant your flag but to embrace the ways
                  challenge, enjoy the air, and behold the. Climb it see the world,
                  not so the world can see you. This is due to their excellent
                  service competitive pricing"
                </p>
                <p className="role">
                  <span className="name">Leslie Alexander </span>/ CEO at Auto
                </p>
              </div>
            </div>
            <img src={heartGift} alt="Heart Gift" className="corner-image" />
            <img src={pinkLeave} alt="Pink Leave" className="corner-image-left" />
          </div>
  )
}
