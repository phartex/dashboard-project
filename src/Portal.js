import React from "react";
import { Container, Row, Col /*Nav*/ } from "react-bootstrap";
import { link } from "react-router";
import "./Dash.css";
import {
  BrowserHistory,
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./SignUp";
import welcome from "./component/welcome.jpg";
const Portal = () => {
  return (
    <body className="landing-body">
      <div className="container main">
        <Row>
          <Col className="img-section">
            <img
              className="logo bg-img"
              src="img/bg-img2.png"
              style={{ backgroundColor: "transparent" }}
              alt=""
            />

            <div className="row main-row  main-text center-text">
              <div className=" col-xs-12 col-md-6 col-lg-6">
                <h1>Join Our Team </h1>
                <h1>
                  {" "}
                  at <span className="text-success">SIDMACH</span>{" "}
                </h1>
              </div>
            </div>

            <p className="vacancy center-text">
              Discover available vacancies{" "}
              <Link to="/Vacancy" className="text-info">
                Click Here For More
              </Link>
            </p>
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
                  placeholder="Username"
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
                  <p className="col-xs-12">
                    Don't have an account?{" "}
                    <Link to="/SignUp" className="text-info">
                      Sign up
                    </Link>
                  </p>
                  <button className="col-xs-12 form_submit">LOGIN</button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </body>
  );
};

export default Portal;
