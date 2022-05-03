import React, { useState } from "react";
import logo from "./dksh-logo.png";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import "./SSOLogin.css";
import CredentialContent from "./CredentialContent";
import Snackbar from "../resusableComponent/DirectionSnackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& > *": {
      margin: theme.spacing(1),
      width: "16vw",
      height: "65vh",
      padding: "32px",
    },
  },
}));
function SSOLogin() {
  const [openSnack, setOpenSnack] = useState(false);

  const handleSnackBar = (status) => {
      setOpenSnack(status);
    };

  const classes = useStyles();
  return (
    <>
      <Snackbar openSnack={openSnack} handleSnackBar={handleSnackBar}/>
      <div className={classes.root}>
        <div className="loginContainer">
          <div className="loginBox">
            <div className="loginBackground">
              <img src={logo} alt="DKSH" className="logo" />
            </div>
            <CredentialContent handleSnackBar={handleSnackBar} setOpenSnack={setOpenSnack}/>
          </div>
        </div>
      </div>

      <div className="flex-foot">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20vw",
          }}
        >
          <Typography variant="caption">Copyright © 2021 DKSH</Typography>

          <Typography variant="caption">
            <a
              href="https://www.google.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Privacy Policy
            </a>
          </Typography>

          <Typography variant="caption">
            <a
              href="https://www.google.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Terms of Service
            </a>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default SSOLogin;
