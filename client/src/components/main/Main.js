import React from "react";
import DServices from "./dservices/DServices";
import "./Main.css";
import Notice from "./notice/Notice";
import AllCollection from "./all-collection/AllCollection";
import AllProducts from "./all-products/AllProducts";

const Main = () => {
  return (
    <div className="main">
      <Notice />
      <DServices />
      <AllCollection />
      <AllProducts />
    </div>
  );
};

export default Main;
