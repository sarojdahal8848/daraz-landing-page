import React from "react";
import DService from "./dservice/DService";
import "./DServices.css";
const DServices = () => {
  return (
    <div className="dServices">
      <DService
        title="dMart"
        image="https://icms-image.slatic.net/images/ims-web/4c334a12-547f-4384-bd8b-f9a8f4b2a04e.png"
      />
      <DService
        title="Recharge & eStore"
        image="https://icms-image.slatic.net/images/ims-web/df3b0235-1a9f-4214-a87a-6388ba816aa7.jpg"
      />
      <DService
        title="Stay Informed"
        image="https://icms-image.slatic.net/images/ims-web/6c95d1c2-2195-4013-a5bf-0cd0b40b1f8b.jpg"
      />
      <DService
        title="Win Vouchers"
        image="https://icms-image.slatic.net/images/ims-web/62731ea8-a7cb-4fff-9651-ff24e12c2e0b.gif"
      />
      <DService
        title="All Your Essential"
        image="https://icms-image.slatic.net/images/ims-web/7be271e5-ac8c-477a-a032-003a25b2dc9f.png"
      />
    </div>
  );
};

export default DServices;
