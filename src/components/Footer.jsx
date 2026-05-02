import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT - About */}
        <div className="footer-box">
          <h2>Guest House</h2>
          <p>
            Experience a peaceful stay near Kashid Beach with comfort, 
            nature, and homely vibes. Perfect for your weekend getaway.
          </p>
        </div>

        {/* CENTER - Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> CWW4+P3P, Beach Road, Kashid, Maharashtra
          </p>
          <p> Mob : 8806387906</p>

          <div className="footer-icons">
            <a 
              href="https://wa.me/918806387906" 
              target="_blank" 
              rel="noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a href="tel:8806387906" className="call">
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* RIGHT - Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#Hero">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Guest House | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;