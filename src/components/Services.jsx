import React from "react";
import "./Services.css";
import { FaHotTub,FaFan,FaSnowflake, FaUtensils, FaCar, FaLeaf, FaUsers, FaShieldAlt, FaClock, FaWifi } from "react-icons/fa";

const services = [
  { icon: <FaHotTub />, title: "Hot Water", desc: "24/7 hot water supply" },
  { icon: <FaFan />, title: "Ceiling Fan", desc: "Comfortable cooling" },
  { icon: <FaSnowflake />, title: "Air Conditioner", desc: "Cool & comfortable AC rooms" },
  { icon: <FaUtensils />, title: "Homemade Food", desc: "Authentic Konkani meals" },
  { icon: <FaCar />, title: "Parking", desc: "Free vehicle parking" },
  { icon: <FaUsers />, title: "Family Rooms", desc: "Spacious family suites" },
  { icon: <FaShieldAlt />, title: "Safe & Secure", desc: "24/7 security" },
  { icon: <FaClock />, title: "Flexible Check-in", desc: "Easy check-in/out" },
  { icon: <FaWifi />, title: "Power Backup", desc: "Uninterrupted power" },
];

const Services = () => {
  return (
    <section id="Services" className="services">
      <h2>Our Amenities</h2>
      <p className="subtitle">Everything you need for a comfortable stay</p>

      <div className="services-container">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;