import React from "react";
import "./Loader.css";
import { BeatLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loader">
      <BeatLoader />
    </div>
  );
};

export default Loader;
