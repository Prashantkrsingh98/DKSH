import React from "react";
import "./SubHeader.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SubHeader(props) {
  return (
    <div className="subHeaderFlexbox">
      <div className="headerFlexStart">
        {props.back ? (
          <IconButton aria-label="back">
            <ArrowBackIosIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        ) : (
          <></>
        )}
        <span style={{ color: "#ffffff" }}>
          <strong>Connect Client</strong>
        </span>
      </div>
      <div className="headerFlexEnd"></div>
    </div>
  );
}

export default SubHeader;
