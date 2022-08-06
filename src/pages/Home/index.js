import React from "react";
import Chart from "../../components/chart";
import Featured from "../../components/featured";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import TableUI from "../../components/table";
import Widget from "../../components/widgets";
import "./home.scss";
const Home = () => {
  return (

    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableUI />
        </div>
      </div>
    </div>



  );
};

export default Home;
