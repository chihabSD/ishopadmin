import React from "react";
import SideBar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import "./style.scss";
import DataTable from "../../components/datatable";
const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
         <DataTable />
      </div>
    </div>
  );
};

export default List;
