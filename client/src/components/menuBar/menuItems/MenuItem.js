import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = () => {
  return (
    <div className="menuItem">
      <Link>Electronic Devices</Link>
      <Link>Electronic Accessories</Link>
      <Link>TV & Home Appliances </Link>
      <Link>Health & Beauty</Link>
      <Link>Babies & Toys</Link>
      <Link>Groceries & Pets</Link>
      <Link>Home & Lifestyle</Link>
      <Link>Women's Fashion</Link>
      <Link>Men's Fashion</Link>
      <Link>Watches & Accessories</Link>
      <Link>Sports & Outdoor</Link>
      <Link>Automotive & Motorbike</Link>
    </div>
  );
};

export default MenuItem;
