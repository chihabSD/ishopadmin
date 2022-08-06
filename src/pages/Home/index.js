import React from "react";
import Chart from "../../components/chart";
import Featured from "../../components/featured";
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
        {/* CHARTS */}
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        {/* LISTS  */}
<div className="listContainer">
  <div className="listTitle"> Latest Transactions</div>
</div>

      </div>
    </div>
  );
};

export default Home;
