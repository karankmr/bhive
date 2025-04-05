import type React from "react";
import { MapPinIcon, ArrowRightIcon } from "lucide-react";
import "./WorksSpaceCard.scss";

interface WorkspaceCardProps {
  image: string;
  type: string;
  location: string;
  dayPrice: number;
  bulkPrice: number;
  bulkDays: number;
}

const WorksSpaceCard: React.FC<WorkspaceCardProps> = ({
  image,
  type,
  location,
  dayPrice,
  bulkPrice,
  bulkDays,
}) => {
  return (
    <div className="workspace-card">
      <div className="workspace-image">
        <div className="workspace-type">
          <span>{type}</span>
        </div>
        <img
          src={image || "/placeholder.svg"}
          alt={`${type} at ${location}`}
          width={400}
          height={250}
          className="space-img"
        />
      </div>

      <div className="workspace-details">
        <div className="location">
          <MapPinIcon className="location-icon" />
          <p>{location}</p>
        </div>

        <div className="pricing">
          <div className="day-pass">
            <span className="pass-label">Day Pass</span>
            <div className="price-container">
              <span className="price">₹ {dayPrice}</span>
              <span className="unit">/day</span>
            </div>
          </div>

          <ArrowRightIcon className="arrow-icon" />

          <div className="bulk-pass">
            <div className="bulk-label">Bulk Pack</div>
            <div className="price-container">
              <span className="price">₹ {bulkPrice}</span>
              <span className="unit">/{bulkDays} days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSpaceCard;
