import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/actions/products.action";
import Loader from "./../../helper/Loader";
import ErrorText from "../../helper/ErrorText";
const BASEURL = "https://daraz-clone-server.herokuapp.com/";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.productReducer);
  const item = !!product && product.item;
  const dispatch = useDispatch();

  console.log(id);

  useEffect(() => {
    console.log("ehllo");
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const [count, setCount] = useState(1);
  const handleIncreament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecreament = () => {
    setCount((prevCount) => prevCount - 1);
  };

  if (count <= 0) {
    setCount(1);
  }

  console.log("hello", product);

  const renderProduct = () => {
    if (product.loading || !product.item) {
      return <Loader />;
    } else if (product.error !== null) {
      return <ErrorText error="Please try again Later....." />;
    } else {
      return (
        <div className="productDetail">
          <div className="productDetail__card">
            <img src={BASEURL + item?.image.substring(7)} alt="" />
            <div className="productDetail__card__middle">
              <h4>{item.title}</h4>
              <div className="productDetail__card__middle__rating">
                <div className="productDetail__card__middle__star">
                  ⭐⭐⭐⭐
                </div>
                <div className="productDetail__card__middle__ratinNumber">
                  23 Rating
                </div>
              </div>
              <hr />
              <p className="productDetail__card__middle__price">
                Rs.
                {product.discount_percent
                  ? item.old_price -
                    item.old_price * item.discount_percent * 0.01
                  : item.old_price}
              </p>
              {item.discount_percent ? (
                <div className="productDetail__card__middle__discount">
                  <p className="productDetail__card__middle__previousPrice">
                    Rs.{item.old_price}
                  </p>
                  <p className="productDetail__card__middle__discountPercent">
                    -{item.discount_percent}%
                  </p>
                </div>
              ) : null}

              <div className="productDetail__card__middle__quantity">
                <h4>Quantity</h4>
                <div className="productDetail__card__middle__quantityButton">
                  <button className="QuantityIcon" onClick={handleDecreament}>
                    <RemoveIcon />
                  </button>
                  <span>{count}</span>
                  <button className="QuantityIcon" onClick={handleIncreament}>
                    <AddIcon />
                  </button>
                </div>
                <div className="productDetail__card__middle__remQuantity">
                  <p>Only {item.stock} items left</p>
                </div>
              </div>
              <button className="AddToCart">Add to Cart</button>
            </div>
          </div>
          <div className="productDescription__card">
            <p>{item.description}</p>
          </div>
        </div>
      );
    }
  };
  return <>{renderProduct()}</>;
  // return <div>hello</div>;
};

export default ProductDetail;
