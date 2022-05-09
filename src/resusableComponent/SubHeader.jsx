import React from "react";
import "./SubHeader.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SubHeader(props) {
  console.log("props", props.path)
  return (
    <div className="subHeaderFlexbox">
      <div className="headerFlexStart">
        {props.back ? (
          <IconButton aria-label="back" onClick={()=>{props.onClickBack(props.path); console.log(props.path)}}>
            <ArrowBackIosIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        ) : (
          <></>
        )}
        <span style={{ color: "#ffffff" }}>
          <strong>{props.subHeading}</strong>
        </span>
      </div>
      <div className="headerFlexEnd"></div>
    </div>
  );
}

export default SubHeader;
