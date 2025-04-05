import type React from "react";
import { useMobile } from "../../hooks/useMobile";
import "./AppDownload.scss";

const AppDownload: React.FC = () => {
  const isMobile = useMobile();

  return (
    <div className="app-download">
      <div className="app-mockup">
        <img
          src="/images/app-mockup.png"
          alt="BHIVE Workspace App"
          width={isMobile ? 200 : 300}
          height={isMobile ? 400 : 600}
        />
      </div>

      <div className="app-info">
        <p className="app-description">
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </p>

        <div className="app-cta">
          <button className="cta-button">Let's get started!</button>
        </div>

        <div className="app-stores">
          <a href="#" className="store-link">
            <img
              src="/images/google-play.png"
              alt="Get it on Google Play"
              width={140}
              height={42}
            />
          </a>
          <a href="#" className="store-link">
            <img
              src="/images/app-store.png"
              alt="Download on the App Store"
              width={140}
              height={42}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
