import React from "react";
import "./MainHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <img
        className="mainHeader__brandLogo"
        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
        alt="daraz-logo"
      />
      <div className="mainHeader__search">
        <input type="text" placeholder="Search in Daraz" />
        <SearchIcon className="mainHeader__search__icon" />
      </div>
      <div className="mainHeader__right">
        <ShoppingCartOutlinedIcon className="mainHeader__right__cartIcon" />
        <img
          className="mainHeader__right__voucherLogo"
          src="https://icms-image.slatic.net/images/ims-web/9a6f2bbd-0287-4e3e-acd7-497ac2d66cc7.gif"
          alt="voucher-logo"
        />
      </div>
    </div>
  );
};

export default MainHeader;
