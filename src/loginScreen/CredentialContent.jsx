import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CredentialContent.css";

function CredentialContent(props) {
  const logInRef = useRef();
  
  const [userId, setUserId] = useState("");
  const [userIdErrorState, setUserIdErrorState] = useState(false);
  const [passwordErrorState, setPasswordErrorState] = useState(false);
  const [password, setPassword] = useState("");

  function handleUserIdChange(e) {
    console.log(e.target.value);
    let value = e.target.value;
    value !== "" ? setUserIdErrorState(false) : setUserIdErrorState(true);
    setUserId(value);
  }

  function handlePasswordChange(e) {
    console.log(e.target.value);
    let value = e.target.value;
    value !== "" ? setPasswordErrorState(false) : setPasswordErrorState(true);
    setPassword(value);
  }

  function handleLogIn() {
    console.log("handleLogIn");
    console.log(userId);
    if (userId === "") setUserIdErrorState(true);
    if (password === "") setPasswordErrorState(true);
    let randomNumber = Math.floor(Math.random() * 10);
    randomNumber>5?props.handleSnackBar(true):props.handleSnackBar(false)
  }

  return (
    <div className="credentialTextboxContainer">
      
      <TextField
        // hiddenLabel
        id="userId"
        error={userIdErrorState}
        helperText={userIdErrorState ? "UserId is required" : ""}
        label="UserId"
        variant="outlined"
        required
        size="medium"
        style={{ width: "80%", paddingBottom: "30px" }}
        onChange={handleUserIdChange}
      />
      
      {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
      <TextField
        // hiddenLabel
        label="Password"
        id="password"
        error={passwordErrorState}
        helperText={passwordErrorState ? "Password is required" : ""}
        variant="outlined"
        size="medium"
        required
        type="password"
        style={{ width: "80%", paddingBottom: "30px" }}
        onChange={handlePasswordChange}
      />

      <Button
        variant="contained"
        style={{
          width: "80%",
          textTransform: "none",
          backgroundColor: "#CB3B51",
        }}
        ref={logInRef}
        onClick={handleLogIn}
      >
        Log In
      </Button>
      <p style={{ color: "#0087EB" }}>forgot password?</p>
    </div>
  );
}

export default CredentialContent;
