import type React from "react";
import { PhoneIcon } from "lucide-react";
import "./Header.scss";
import BhiveLogo from "@/assets/icons/BhiveLogo.svg";

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
          <PhoneIcon className="phone-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
