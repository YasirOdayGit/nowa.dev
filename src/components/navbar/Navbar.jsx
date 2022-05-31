import React from "react";
import { NavigationBar } from "../../foundation";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const nav = useNavigate();
  return (
    <NavigationBar
      logo={<img src={logo} about="logo" width="155px" />}
      backgroundColor="#19193055"
      disappearing
      glass
      height="70px"
      noBackgroundColorFixed
    >
      <p onClick={() => nav("home")}>Home</p>
      <p onClick={() => nav("about")}>About</p>
    </NavigationBar>
  );
}
