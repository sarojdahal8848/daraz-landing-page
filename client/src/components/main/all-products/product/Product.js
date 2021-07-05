import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../../../redux/actions/products.action";
import { Link } from "react-router-dom";

import Loader from "../../../../helper/Loader";
import ErrorText from "../../../../helper/ErrorText";
const BASEURL = "http://localhost:5000/";

const Product = () => {
  const [visible, setvisible] = useState(6);
  const showMoreItems = () => {
    setvisible((preValue) => preValue + 6);
  };
  const products = useSelector((state) => state.productReducer);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    if (products.loading) {
      return <Loader />;
    } else if (products.error !== null) {
      return <ErrorText error="Please try again Later....." />;
    } else {
      return (
        <div className="productPage__wrapper">
          <div className="product__wrapper">
            {products.items.slice(0, visible).map((product) => {
              // console.log(product.image.substring(7));
              const actual_price =
                product.old_price -
                product.old_price * product.discount_percent * 0.01;
              return (
                <div className="product">
                  <img src={BASEURL + product.image.substring(7)} alt="" />
                  <Link to={`/product/${product._id}`}>
                    <div className="product__textBox">
                      <p className="product__title">{product.title}</p>
                    </div>
                  </Link>
                  <p className="product__price">
                    Rs.
                    {product.discount_percent
                      ? actual_price
                      : product.old_price}
                  </p>
                  {product.discount_percent ? (
                    <div className="product__discount">
                      <p className="product__previouPrice">
                        Rs.{product.old_price}
                      </p>
                      <p className="product__discountPercent">
                        -{product.discount_percent}%
                      </p>
                    </div>
                  ) : null}

                  <div className="product__rating">
                    <div className="product__star">⭐⭐⭐⭐</div>
                    <div className="product__noOfComments">(25)</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="product__loadMore">
            <button onClick={showMoreItems}>Load More</button>
          </div>
        </div>
      );
    }
  };
  return <>{renderProducts()}</>;
};

export default Product;
