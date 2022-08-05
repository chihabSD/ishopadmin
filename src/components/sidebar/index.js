import React from "react";
import { LineStyle, Analytics, Timeline, TrendingUp } from "@mui/icons-material";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>
          
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SideBar;
