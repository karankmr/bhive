import React, { useEffect, useState } from "react";
import "./Spaces.scss";
import { Workspace } from "../types/workspace";
import WorkspaceCard from "./WorkSpaceCard/WorksSpaceCard";

const rawRepoBase =
  "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main";

const Spaces: React.FC = () => {
  const [spaces, setSpaces] = useState<Workspace[]>([]);

  useEffect(() => {
    fetch(`${rawRepoBase}/data.json`)
      .then((res) => res.json())
      .then((data) => {
        const activeSpaces = data.filter(
          (item: Workspace) => item.is_day_pass_enabled,
        );
        setSpaces(activeSpaces);
      });
  }, []);

  return (
    <section className="spaces-section">
      <div className="wrapper">
        <h2 className="section-title">Our Space Overview</h2>
        <div className="container">
          {spaces.map((space) => (
            <WorkspaceCard
              key={space.id}
              data={space}
              distance="6 Kms"
              imageBaseURL={`${rawRepoBase}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;
