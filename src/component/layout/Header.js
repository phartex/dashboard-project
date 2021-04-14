import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-bar" color="light" expand="md">
        <Navbar.Brand>
          {" "}
          <img src="img/sidmach-logo2.png" alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="nav-items">
            <img src="img/search.png" alt="" />
            <img src="img/bell.png" alt="" />
            <img src="img/Ellipse.png" alt="" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
