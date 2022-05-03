import React from "react";
import "./Header.css";
import logo from "../loginScreen/dksh-logo.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

function Header(props) {
  return (
    <>
      <div className="headerFlexbox">
        <div className="headerFlexStart">
          <img src={logo} alt="DKSH" className="logo" />
          {props.home ? (
            <Button
              variant="text"
              style={{
                textTransform: "none",
                color: "#CB3B51",
                paddingTop: "9px",
              }}
            >
              <strong>Home</strong>
            </Button>
          ) : (
            <></>
          )}
        </div>
        <div className="headerFlexEnd">
          <Button
            variant="text"
            style={{
              textTransform: "none",
              color: "#CB3B51",
              paddingTop: "9px",
            }}
          >
            <strong>Logout</strong>
          </Button>
          <IconButton aria-label="profile">
            <ChatBubbleIcon sx={{ color: "#CB3B51" }} />
          </IconButton>
          <IconButton aria-label="profile">
            <PersonIcon sx={{ color: "#CB3B51" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Header;
