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

import welcome from "./welcome.jpg";
const Portal = () => {
  return (
    <body>
      <div className="container main">
        <div className="row main-row">
          <div className=" col-xs-12 col-md-6 col-lg-6">
            <h1>Join Our Team </h1>
            <h1 className="text-success"> At Sidmach</h1>
          </div>
        </div>
        <Row className="">
          <Col>
            <img
              className="logo bg-img"
              src="img/bg1.png"
              style={{ backgroundColor: "transparent" }}
              alt=""
            />

            <p className="vacancy">
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
                  placeholder="Username (minimum 7 characters)"
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
