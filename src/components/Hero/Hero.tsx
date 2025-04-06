import type React from "react";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="price">₹199/-!</span>
        </h1>
      </div>
      <div className="hero-right"></div>
    </section>
  );
};

export default Hero;
