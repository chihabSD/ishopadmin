import React from "react";
import "./style.scss";
import {

  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
<CircularProgressbar value={70} text="70%" strokeWidth={1}/>
        </div>
      </div>
    </div>
  );
};

export default Featured;