import type React from "react";
import "./FeatureItem.scss";

interface FeatureItemProps {
  icon: string;
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={title} width={24} height={24} />
      <p className="feature-title">{title}</p>
    </div>
  );
};

export default FeatureItem;
