import "./Hero.css";
import { useEffect, useState } from "react";

import img1 from "./image/123.jpg";
import img2 from "./image/112.jpg";
import img3 from "./image/sunset.jpg";

export default function Hero() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-overlay">
        <h1>Prathamesh Guest House Kashid</h1>
        <p>Enjoy your perfect coastal getaway</p>
        <div className="hero-buttons">
        <button className="primary-btn">Book Now</button>
        <button  className="secondary-btn"
        onClick={() => window.open("https://gothru.co/P9JvC5MtT?index=scene_0&hlookat=281&vlookat=-13&fov=120", "_blank")}>
        Virtual Tour
         </button>
       </div>
      </div>
    </section>
  );
}