import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../Assets/Styles/Home.css";

const Navbars = ({ card_Number, handleShow }) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => handleShow(false)}
            style={{ color: "red" }}
          >
            E-Commerce
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#te">About</Nav.Link>
              <Nav.Link href="#t">Contact</Nav.Link>
            </Nav>
            <Nav>
              <div>
                <div>
                  <span
                    onClick={() => handleShow(true)}
                    className="add_number"
                    style={{ color: "red" }}
                  >
                    {card_Number}
                  </span>
                </div>
                <i
                  onClick={() => handleShow(true)}
                  className="cart_box"
                  style={{ color: "white", fontSize: "46px" }}
                  class="fa fa-cart-plus	"
                ></i>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
