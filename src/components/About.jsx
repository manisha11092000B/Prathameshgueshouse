import React from "react";
import "./abouts.css";
import kashidImg from "../assets/image.jpg";

const About = () => {
  return (
    <section id="About" className="about">
      <div className="about-container">
        
        <div className="about-image">
        <img src={kashidImg} alt="Kashid Homestay" />

        <div className="overlay">
        <span>Explore Kashid</span>
        </div>
        </div>

        <div className="about-content">
          <h2>About Our Kashid Homestay</h2>
          <p>
            Nestled near Kashid Beach, our homestay offers a peaceful escape 
            surrounded by nature, fresh air, and scenic beauty. Perfect for a 
            relaxing getaway with your loved ones.
          </p>

          <ul>
            <li>🌊 Near Beach Location</li>
            <li>🏡 Comfortable Stay</li>
            <li>🍽️ Homely Food</li>
            <li>🌿 Nature Friendly</li>
          </ul>

          <button className="about-btn">Book Your Stay</button>
          
        </div>

      </div>
    </section>
  );
};

export default About;