import React from "react";
import "./Collection.css";
const Collection = ({ title, products, image1, image2, image3 }) => {
  return (
    <div className="collection">
      <h5>
        {title} {">"}
      </h5>
      <span>{products} products</span>
      <div className="collection__images">
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
      </div>
    </div>
  );
};

export default Collection;
