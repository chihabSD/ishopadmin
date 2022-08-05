import React from "react";
import { LineStyle, Analytics, Timeline, TrendingUp } from "@mui/icons-material";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3>Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
          
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
