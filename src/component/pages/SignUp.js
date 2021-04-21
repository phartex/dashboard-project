import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../../SignUp.css";

const SignUp = () => {
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
              <h2 className="sign-up-header">Sign Up To Our Careers Portal</h2>
              <div className="sign-up-form">
                <Row className="form-logo">
                  <img src="img/sidmach-logo2.png" alt="" />
                </Row>

                <Row>
                  <input type="text" placeholder="Username" />
                </Row>

                <Row>
                  <input type="text" placeholder="Email Address" />
                </Row>

                <Row>
                  <input type="text" placeholder="Mobile Number" />
                </Row>
                <Row>
                  <input type="text" placeholder="Password" />
                </Row>
                <Row>
                  <input type="text" placeholder="Confirm Password" />
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
                  <button className="blue-btn sign-up-btn">
                    Create Account
                  </button>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
};

// class SignUp extends React.Component{

//     render(){
//         return(
//             <BrowserRouter>
//             <nav>

//             </nav>
//             </BrowserRouter>

//         )
//     }

// }

export default SignUp;
