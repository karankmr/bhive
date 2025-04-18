import type React from "react";
import FeatureItem from "./FeatureItem/FeatureItem";
import "./Features.scss";
import Community from "../../assets/icons/community.svg";
import Gym from "../../assets/icons/gym.svg";
import Wifi from "../../assets/icons/wifi.svg";
import Cafe from "../../assets/icons/cafe.svg";
import Affordable from "../../assets/icons/affordable.svg";
import Comfort from "../../assets/icons/comfort.svg";
import Booking from "../../assets/icons/booking.svg";
import Sports from "../../assets/icons/sports.svg";

const features = [
  { icon: Community, title: "Community Events" },
  { icon: Gym, title: "Gym Facilities" },
  { icon: Wifi, title: "High-Speed WiFi" },
  { icon: Cafe, title: "Cafe & Tea Bar" },
  { icon: Affordable, title: "Affordable" },
  { icon: Comfort, title: "Comfort Lounges" },
  { icon: Booking, title: "Quick Booking" },
  { icon: Sports, title: "Sports Area" },
];

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Why Choose us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
