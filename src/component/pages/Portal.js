import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { link } from "react-router";
import "../../Dash.css";
import {
  BrowserHistory,
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./SignUp";

const Portal = () => {
  return (
    <body className="landing-body">
      {/* <Navbar className="nav-bar" color="light" expand="md">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="nav-items">
            {" "}
            <p className="info">
              Return to{" "}
              <span className="info-link text-info">
                {" "}
                <Link to="/">main</Link>
              </span>{" "}
              website
            </p>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="container main">
        <Row>
          <Col className="img-section">
            <img
              className="logo bg-img"
              src="img/bg-img2.png"
              style={{ backgroundColor: "transparent" }}
              alt=""
            />

            <div className="row main-row  main-text left-text">
              <div className=" col-xs-12 col-md-6 col-lg-7">
                <h1>Join Our team </h1>
                <h1>
                  {" "}
                  at <span className="text-sidmach">SIDMACH</span>{" "}
                </h1>
                <p className="vacancy ">
                  Discover available vacancies{" "}
                  <Link to="/dashboard">Click Here For More</Link>
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <form className="sign-in-form">
              <img src="img/sidmach-logo2.png" alt="" />
              <div className="form-header">
                <p className="welcome">WELCOME BACK ! LOGIN HERE</p>
              </div>

              <div className="form_group">
                <input
                  type="text"
                  id="name"
                  name="username"
                  placeholder="Email Address"
                  className="form_input"
                  required
                  minlength=" 7"
                />
                <span id="nameverify"></span>
              </div>

              <div className="form_group">
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Password"
                  required
                  minlength="8"
                  id="confirm_password"
                  class="form_input"
                />

                <div className="middle-footer row">
                  <button className=" form_submit">LOGIN</button>
                </div>
                <Row>
                  <p className="no-account-link">
                    Don't have an account? <Link to="/SignUp">Sign up</Link>
                  </p>
                </Row>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </body>
  );
};

export default Portal;
