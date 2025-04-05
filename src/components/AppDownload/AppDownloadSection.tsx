import type React from "react";
import AppDownload from "./AppDownload";
import "./AppDownloadSection.scss";

const AppDownloadSection: React.FC = () => {
  return (
    <section className="app-section">
      <div className="container">
        <h2 className="section-title">Download our app now</h2>
        <AppDownload />
      </div>
    </section>
  );
};

export default AppDownloadSection;
