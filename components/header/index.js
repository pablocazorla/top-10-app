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
      <Row className="justify-content-center align-items-center">
        <Col xs="auto" className="h100">
          <div style={{ height: 100 }}>
            <img src="/img/logo.png" alt="" className="img-vertical" />
          </div>
        </Col>
        <Col xs="auto">
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
