import type React from "react";
import "./AppDownloadSection.scss";
import AppCtaIcon from "../../assets/icons/app-cta.svg";
import GoogleIcon from "../../assets/icons/google-play.svg";
import AppleIcon from "../../assets/icons/app-store.svg";

const AppDownloadSection: React.FC = () => {
  return (
    <section className="app-section">
      <div className="container">
        <h2 className="section-title">Download our app now</h2>
        <div className="card">
          <img src={AppCtaIcon} />
          <div className="app-download">
            <p>
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="app-icons">
              <img src={GoogleIcon} />
              <img src={AppleIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
