import type React from "react";
import WorksSpaceCard from "./WorksSpaceCard";
import "./Spaces.scss";

const Spaces: React.FC = () => {
  const workspaces = [
    {
      image: "/images/workspace-1.png",
      type: "Workspace",
      location: "HSR Sector 6, Service Road",
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
    },
    {
      image: "/images/workspace-2.png",
      type: "Flexyspace",
      location: "HSR Sector 6, Service Road",
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
    },
    {
      image: "/images/workspace-3.png",
      type: "Platinum",
      location: "HSR Sector -6, 5th main",
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
    },
    {
      image: "/images/workspace-4.png",
      type: "Workspace",
      location: "HSR Sector -2, 27th main Road",
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
    },
    {
      image: "/images/workspace-5.png",
      type: "Campus",
      location: "HSR Sector 6, Service Road",
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
    },
    {
      image: "/images/workspace-6.png",
      type: "Platinum",
      location: "HSR Sector -6, 5th main",
      dayPrice: 249,
      bulkPrice: 2400,
      bulkDays: 10,
    },
  ];

  return (
    <section className="spaces-section">
      <div className="container">
        <h2 className="section-title">Our Space Overview</h2>
        <div className="spaces-grid">
          {workspaces.map((workspace, index) => (
            <WorksSpaceCard
              key={index}
              image={workspace.image}
              type={workspace.type}
              location={workspace.location}
              dayPrice={workspace.dayPrice}
              bulkPrice={workspace.bulkPrice}
              bulkDays={workspace.bulkDays}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;
