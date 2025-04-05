import type React from "react";
import "./Hero.scss";
import CoworkingImg from "../../assets/images/Coworking.svg";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Host your meeting with world-class amenities.</h1>
            <h2>
              Starting at <span className="price">₹199/-!</span>
            </h2>
          </div>
          <div className="hero-image">
            <img
              src={CoworkingImg}
              alt="Person at workspace"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
