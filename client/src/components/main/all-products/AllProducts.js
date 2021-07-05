import React from "react";
import "./AllProducts.css";
import Product from "./product/Product";
const AllProducts = () => {
  return (
    <div className="allProducts">
      <h3>Just For You</h3>
      <div className="allProducts__product">
        <Product />
      </div>
    </div>
  );
};

export default AllProducts;
