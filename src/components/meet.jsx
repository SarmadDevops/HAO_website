import { FaShareAlt } from "react-icons/fa";

import leslie from "../assets/leslie.jpg";
import joshua from "../assets/joshua.jpg";
import ken from "../assets/ken.jpg";
import lillian from "../assets/lillian.jpg";

export default function Meet() {
  return (
    <div className="team-section">
      <p className="tagline">You Can Help The Poor With Us</p>
      <h2 className="heading">
        Meet The Team <span className="heading-mem">Member</span>
      </h2>

      <div className="card-wrapper">
        {[
          { img: leslie, name: "Leslie Alexander", role: "CEO & Boss" },
          { img: joshua, name: "Joshua Nunnelly", role: "Volunteer" },
          { img: ken, name: "Ken William", role: "Team Leader" },
          { img: lillian, name: "Lillian Lewis", role: "Support Leader" },
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
