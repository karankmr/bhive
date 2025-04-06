import type React from "react";
import "./Header.scss";
import BhiveLogo from "../../assets/icons/bhive-logo.svg";
import PhoneIcon from "../../assets/icons/phone-icon.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img
            src={BhiveLogo}
            alt="BHIVE Workspace"
            width={120}
            height={40}
            className="logo"
          />
        </div>
        <div className="phone-container">
          <img src={PhoneIcon} width={52} height={52} />
        </div>
      </div>
    </header>
  );
};

export default Header;
