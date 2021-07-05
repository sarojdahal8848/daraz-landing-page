import React from "react";

import "./Header.css";
import MainHeader from "./mainHeader/MainHeader";
import SubHeader from "./subHeader/SubHeader";
const Header = () => {
  return (
    <div className="header">
      <SubHeader />
      <MainHeader />
    </div>
  );
};

export default Header;
