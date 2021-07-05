import React from "react";
import Payment from "../../../assets/images/payment.png";
import "./FooterTwo.css";
import SocialIcon from "../../../assets/images/social-icon.png";
import Verify from "../../../assets/images/verify.png";

const FooterTwo = () => {
  return (
    <div className="footerTwo">
      <div className="footerTwo__top">
        <div className="footerTwo__first">
          <h4>Payment Method</h4>
          <img src={Payment} alt="" />
        </div>
        <div className="footerTwo__second">
          <h4>Daraz International</h4>
          <div className="footerTwo__second__country">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png"
              alt=""
            />
            <img
              src="https://live.staticflickr.com/2052/2294634746_838b570b51_c.jpg"
              alt=""
            />
            <img
              src="https://cdn.countryflags.com/thumbs/myanmar/flag-400.png"
              alt=""
            />
            <img src="https://wallpaperaccess.com/full/1410602.jpg" alt="" />
          </div>
        </div>
        <div className="footerTwo__third">
          <h4>Follow Us</h4>
          <img src={SocialIcon} alt="" />
        </div>
        <div className="footerTwo__fourth">
          <h4>Verified By</h4>
          <img src={Verify} alt="" />
        </div>
      </div>
      <div className="footerTwo__bottom">
        <h4>&copy; Daraz 2021</h4>
      </div>
    </div>
  );
};

export default FooterTwo;
