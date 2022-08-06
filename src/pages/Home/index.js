import React from "react";
import Nabar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import Widget from "../../components/widgets";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Nabar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
