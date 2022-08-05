import React from "react";
import "./topbar.css";

import { Notifications, Settings, Language } from "@mui/icons-material";
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {" "}
          <span className="logo">ISHOP</span>{" "}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
          </div>

          <div className="topbarIconContainer">
            <Settings />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
