import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
// import graph from './graph.png'
import { Navbar, Nav } from "react-bootstrap";
import "./SignUp.css";
import image from "./component/signup-image.png";

const SignUp = () => {
  return (
    <body>
      <div>
        <Navbar className="nav-bar" color="light" expand="md">
          <Navbar.Brand>
            {" "}
            <img src="img/sidmach-logo2.png" alt="" />{" "}
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
        <div className="container">
          <div className="row main">
            <div className="left container col-xs-12 col-md-12 col-lg-4">
              <img className="image" src={image} />
              <p>Gain access into our world of opportunities</p>
            </div>
            <div className="right col-xs-12 col-md-12 col-lg-8">
              <div className="sign_portal">
                <h2>Sign Up To Our Careers Portal</h2>

                <div className="row main_right">
                  <div className="col-xs-12  input_field" id="field2">
                    <p>Email Address</p>
                    <input type="text" />
                  </div>
                  <div className="col-xs-12  input_field" id="field3">
                    <p>Username</p>
                    <input type="text" />
                  </div>
                </div>

                <div className="row main_password">
                  <div className="col-xs-12 input_field" id="field2">
                    <p>Password</p>
                    <input type="password" placeholder="    6+characters" />
                  </div>
                  <div className="col-xs-12  input_field" id="field3">
                    <p>Confirm Password</p>
                    <input type="password" />
                  </div>
                </div>

                <div className="terms">
                  <i className="far fa-square"></i>
                  <p>
                    By creating an account, You agree to our{" "}
                    <span className="text-info"> Terms</span>
                    <br />& <span className="text-info">Private Policy</span>
                  </p>
                </div>
                <button>Create Account</button>
              </div>
            </div>
          </div>
        </div>
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
