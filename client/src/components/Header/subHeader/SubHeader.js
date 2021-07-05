import React from "react";

import "./SubHeader.css";
import { Nav } from "react-bootstrap";

const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subHeader__link">
        <Nav.Link className="subHeader__linkItem subHeader__linkItemOrange">
          SAVE MORE ON APP
        </Nav.Link>
        <Nav.Link className="subHeader__linkItem">SALE ON DARAZ</Nav.Link>
        <Nav.Link className="subHeader__linkItem">CUSTOMER CARE</Nav.Link>
        <Nav.Link className="subHeader__linkItem">TRACK MY ORDER</Nav.Link>
        <Nav.Link className="subHeader__linkItem">LOGIN</Nav.Link>
        <Nav.Link className="subHeader__linkItem">SIGN UP</Nav.Link>
        <Nav.Link className="subHeader__linkItem">भाषा परिवर्तन</Nav.Link>
      </div>
    </div>
  );
};

export default SubHeader;
