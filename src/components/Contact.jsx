import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, date, guests } = formData;

    const message = `Hello, I want to book a stay:
Name: ${name}
Phone: ${phone}
Date: ${date}
Guests: ${guests}`;

    const whatsappURL = `https://wa.me/919158043889?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="Contact" className="contact">
      <h2>Book Your Stay</h2>
      <p className="subtitle">Quick booking via WhatsApp</p>

      {/* 🔥 Wrapper added */}
      <div className="contact-wrapper">

        {/* LEFT: Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />
          <input type="number" name="guests" placeholder="No. of Guests" onChange={handleChange} required />

          <button type="submit">Send on WhatsApp</button>
        </form>

        {/* RIGHT: Google Map */}
        <div className="map-container">
        <iframe
    src="https://www.google.com/maps?q=CWW4+P3P,+Beach+Road,+Revdanda+-+Murud+Rd,+Kashid,+Maharashtra+402401,+India&output=embed"
    loading="lazy"
    title="Kashid Location"
  ></iframe>
</div>

      </div>
    </section>
  );
};

export default Contact;