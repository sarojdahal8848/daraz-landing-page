import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./DService.css";
const DService = ({ title, image }) => {
  return (
    <div className="dService">
      <div className="dService__branding">
        <img src={image} alt="dMart-logo" />
        <span>{title}</span>
      </div>
      <ChevronRightIcon className="dService__icon" />
    </div>
  );
};

export default DService;
