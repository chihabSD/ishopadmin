import React from "react";
import "./style.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/test`} style={{textDecoration:'none'}} >
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
        <div className="datatableTitle">
        <Link to={`/users/new`} style={{textDecoration:'none'}} >

            Add new User
        </Link>
        </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
