import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../../SignUp.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/authentication";

const SignUp = ({ auth: { users }, register }) => {
  const [user, setUser] = useState({
    username: "",
    FirstName: "",
    email: "",
    LastName: "",
    password: "",
    password_confirmation: ""
  });

  const {
    username,
    FirstName,
    LastName,
    email,
    password,
    password_confirmation
  } = user;

  const onSumbit = e => {
    e.preventDefault();
    // let data = {
    //   first_name,
    //   last_name,
    //   username,
    //   email,
    //   password,
    //   password_confirmation
    // };

    // const callback = response => {
    //   console.log(response);
    // };

    // const onError = err => {
    //   console.log(err);
    // };

    // register(data, callback, onError);
    register({
      username,
      email,
      FirstName,
      password,
      LastName
    });
    console.log("register submit");
  };

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    document.body.style = "background: white;";
  }, []);
  return (
    <body className="sign-up-body">
      <div>
        <Navbar className="nav-bar" color="light" expand="md">
          <Navbar.Brand>
            {" "}
            <img src="img/sidmach-logo2.png" alt="" />
          </Navbar.Brand>
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
        </Navbar>

        <Container className="sign-up-bg">
          <Row>
            <Col md={7}>
              <div className="sign-up-form">
                <Row className="form-logo">
                  <h2 className="sign-up-header">
                    Sign Up To Our Careers Portal
                  </h2>
                </Row>
                <form onSubmit={onSumbit}>
                  <Row>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={onChange}
                      required
                    />
                  </Row>

                  <Row>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      name="email"
                      onChange={onChange}
                      required
                    />
                  </Row>

                  <Row>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      value={FirstName}
                      name="FirstName"
                      onChange={onChange}
                      required
                    />
                  </Row>
                  <Row>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={onChange}
                      required
                    />
                  </Row>
                  <Row>
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      value={LastName}
                      name="LastName"
                      onChange={onChange}
                      required
                    />
                  </Row>

                  <div className="terms">
                    <div className="overview-info form-check">
                      <input type="checkbox" />

                      <p>
                        By creating an account, You agree to our Terms & Privacy
                        policy{" "}
                      </p>
                    </div>
                  </div>
                  <Row>
                    <button className="blue-btn sign-up-btn" type="submit">
                      Create Account
                    </button>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
};

SignUp.propTypes = {
  auth: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { register })(SignUp);
