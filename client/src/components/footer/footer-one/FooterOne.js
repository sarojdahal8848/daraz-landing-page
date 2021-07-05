import React from "react";
import "./FooterOne.css";
import { Link } from "react-router-dom";
import Apple from "../../../assets/images/apple.png";
import Google from "../../../assets/images/google.png";
import AppGallery from "../../../assets/images/app-gallery.png";

const FooterOne = () => {
  return (
    <div className="footerOne">
      <div className="footerOne__left">
        <div className="footerOne__left__linkOne">
          <h4>Customer Care</h4>
          <div className="footerOne__left__links">
            <Link>Help Center</Link>
            <Link>How to Buy</Link>
            <Link>Returns & Refunds</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
        <div className="footerOne__left__linkTwo">
          <h4>Earn With Daraz</h4>
          <div className="footerOne__left__links">
            <Link>Daraz University</Link>
            <Link>Sell on Daraz</Link>
            <Link>Code of Conduct</Link>
          </div>
        </div>
      </div>
      <div className="footerOne__middle">
        <h4>Daraz</h4>
        <div className="footerOne__left__links">
          <Link>About Daraz</Link>
          <Link>Careers</Link>
          <Link>Daraz Blog</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Digital Payments</Link>
          <Link>Daraz Customer University</Link>
          <Link>Daraz Affiliate Program</Link>
        </div>
      </div>
      <div className="footerOne__last">
        <div className="footerOne__last__generalLogo">
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png"
            alt=""
          />
          <div className="footerOne__last__generalLogo__darazLogo">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1ECLKv7omBKNjSZFqXXXtqVXa.png"
              alt=""
            />
            <p className="footerOne__last__generalLogo__darazLogo__redText">
              Happy Shopping
            </p>
            <p>Download App</p>
          </div>
        </div>
        <div className="footerOne__last__share">
          <img src={Apple} alt="" />
          <img src={Google} alt="" />
          <img src={AppGallery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
