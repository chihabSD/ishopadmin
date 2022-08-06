import React, { useContext } from "react";
import "./style.scss";
import {
  LineStyle,
  Analytics,
  Timeline,
  NotificationsNone,
  TrendingUp,
  PersonOutline,
  DarkMode,
  StoreMallDirectory,
  Dashboard,
  SettingsBrightnessOutlined,
  CreditCard,
  LocalShipping,
  SettingsApplications,
  InsertChart,
  SettingsSystemDaydreamOutlined,
  AccountCircleOutlined,
  PsychologyOutlined,
  ExitToApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/darkModeContext";

const SideBar = () => {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ISHOP-ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutline className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreMallDirectory className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li onClick={() => toggleDarkMode()}>
            {dark ? (
              <SettingsBrightnessOutlined className="icon" />
            ) : (
              <DarkMode className="icon" />
            )}

            <span>{dark ? "Light Mode" : "Dark Mode "}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
