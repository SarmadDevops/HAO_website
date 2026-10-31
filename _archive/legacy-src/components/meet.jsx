import { FaShareAlt } from "react-icons/fa";

import uzair from "../assets/uzair.jpeg";
import tayyaba from "../assets/tayyaba.jpeg";
import tehreem from "../assets/tehreem.jpeg";
// import lillian from "../assets/lillian.jpg";

export default function Meet() {
  return (
    <div className="team-section">
      <p className="tagline">You Can Help The Poor With Us</p>
      <h2 className="heading">
        Meet The Team <span className="heading-mem">Member</span>
      </h2>

      <div className="card-wrapper">
        {[
          { img: uzair, name: "Uzair Rahseed", role: "Founder" },
          { img: tayyaba, name: "Tayyaba", role: "President" },
          { img: tehreem, name: "Tehreem", role: "Vice President" },
          // { img: lillian, name: "Lillian Lewis", role: "Support Leader" },
        ].map((member, index) => (
          <div className="card" key={index}>
            <img src={member.img} alt={member.name} />
            <FaShareAlt className="icon-top" />
            <div className="info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="button">All Volunteer</button>
    </div>
  );
}
