import React from "react";
import NoticeLogo from "../../../assets/images/notice-logo.png";
import "./Notice.css";
const Notice = () => {
  return (
    <div className="notice">
      <img src={NoticeLogo} alt="notice-logo" />
    </div>
  );
};

export default Notice;
