import React from "react";
import "./ErrorText.css";
const ErrorText = ({ error }) => {
  return (
    <div className="errorText">
      <h4>{error}</h4>
    </div>
  );
};

export default ErrorText;
