import React, { useState } from "react";
import {
  Row,
  Col,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Row className="h100 justify-content-center aling-items-center g-2">
        <Col xs="auto" className="h100">
          <img src="/img/logo.png" alt="" className="img-vertical" />
        </Col>
        <Col xs="auto" className="h100">
          <h1 className="text-white m-0 p-0 ps-2">Top 10 de las tiendas</h1>
          <div className="tdr-content">
            <img src="/img/tdr.png" alt="" className="img-auto" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
