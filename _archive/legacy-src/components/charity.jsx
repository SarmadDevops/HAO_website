import { FaArrowRight, FaClock, FaMapMarkerAlt } from "react-icons/fa";

import foodImg from "../assets/foodImg.jpg";
import waterImg from "../assets/waterImg.jpg";
import childImg from "../assets/childImg.jpg";
export default function Charity() {
  return (
    <section className="charity-section">
      <p className="charity-tagline">We are always open for children</p>
      <h2 className="charity-heading">
        Transforming Lives <br /> Through Charity
      </h2>

      <div className="event-wrapper">
        {[
          {
            img: foodImg,
            title: "Empowering Through Food",
            time: "11:00 AM - 10:00 AM",
            location: "Singapore",
          },
          {
            img: waterImg,
            title: "Clean Water To Rural",
            time: "11:00 AM - 10:00 AM",
            location: "New York",
          },
          {
            img: childImg,
            title: "Old People & Child Trouble",
            time: "11:00 AM - 10:00 AM",
            location: "Brazil",
          },
        ].map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.img} alt={event.title} />
            <div className="event-info">
              <div className="event-header">
                <h3>{event.title}</h3>
                <div className="arrow-icon">
                  <FaArrowRight />
                </div>
              </div>
              <p className="event-time">
                <span>
                  <FaClock className="event-icon" /> {event.time}
                </span>
                <span>
                  <FaMapMarkerAlt className="event-icon" /> {event.location}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
