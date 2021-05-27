import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { login } from "../../actions/authentication";
import { connect } from "react-redux";
import "../../Dash.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Portal = ({ auth: { users, isAuthenticated }, login, props }) => {
  const history = useHistory();
  useEffect(
    props => {
      if (isAuthenticated) {
        history.push("/dashboard");
      }
      //eslint-diable-next-line
    },
    [isAuthenticated, history]
  );
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onSumbit = e => {
    e.preventDefault();
    let data = {
      email,
      password
    };

    console.log("login submit");

    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      login({
        email,
        password
      });
    }
  };

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
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
            <form className="sign-in-form" onSubmit={onSumbit}>
              <img src="img/sidmach-logo2.png" alt="" />
              <div className="form-header">
                <p className="welcome">WELCOME BACK ! LOGIN HERE</p>
              </div>

              <div className="form_group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  className="form_input"
                  required
                  onChange={onChange}
                  minlength=" 8"
                />
                <span id="nameverify"></span>
              </div>

              <div className="form_group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                  required
                  minlength="8"
                  id="confirm_password"
                  class="form_input"
                />

                <div className="middle-footer row">
                  <button type="submit" className=" form_submit">
                    LOGIN
                  </button>
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

Portal.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { login })(Portal);
