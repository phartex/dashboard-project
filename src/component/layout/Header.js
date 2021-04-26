import React from "react";
import { Navbar, Nav, Dropdown, Media } from "react-bootstrap";

const Header = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src="img/Vector2.png" alt="" />
    </a>
  ));
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

            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                variant="success"
                id="dropdown-basic"
                drop="left"
                align="left"
                menuAlign="left"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  className="profile-dropdown-header"
                >
                  Chetachi Mkparu
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="user-type">
                  User
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className="mb-3">
                  <Media className="dropdown-media">
                    <img
                      width={24}
                      height={24}
                      className="mr-3"
                      src="img/profile.png"
                      alt=""
                    />
                    <Media.Body className="drop-menu-item">
                      <p>Account Profile</p>
                    </Media.Body>
                  </Media>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="mb-3">
                  <Media className="dropdown-media">
                    <img
                      width={24}
                      height={24}
                      className="mr-3"
                      src="img/application-icon2.png"
                      alt=""
                    />
                    <Media.Body className="drop-menu-item">
                      <p>Update Application </p>
                    </Media.Body>
                  </Media>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="mb-3">
                  <Media className="dropdown-media">
                    <img
                      width={24}
                      height={24}
                      className="mr-3"
                      src="img/power.png"
                      alt=""
                    />
                    <Media.Body className="drop-menu-item">
                      <p>Sign Out</p>
                    </Media.Body>
                  </Media>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className="mb-3">
                  <Media className="dropdown-media">
                    <img
                      width={24}
                      height={24}
                      className="mr-3"
                      src="img/back-icon.png"
                      alt=""
                    />
                    <Media.Body className="drop-menu-item">
                      <p>Return to main website</p>
                    </Media.Body>
                  </Media>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
