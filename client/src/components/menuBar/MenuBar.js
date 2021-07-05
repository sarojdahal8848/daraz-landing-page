import React from "react";
import MenuItem from "./menuItems/MenuItem";
import Slider from "./slider/Slider";
import "./MenuBar.css";
const MenuBar = () => {
  return (
    <div className="menuBar">
      <MenuItem />
      <Slider />
    </div>
  );
};

export default MenuBar;
