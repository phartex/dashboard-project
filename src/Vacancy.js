import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import Header from "./component/layout/Header";
import Link, { BrowserRouter } from "react-router-dom";
import robot from "./component/robot.jpg";
import "./Vacancy.css";
import profile1 from "./component/profile-1.jpg";
import profile2 from "./component/profile-2.jpg";
import vector1 from "./component/Sidmach/Vector1.png";
import vector from "./component/Sidmach/Vector.png";
import Ellipse from "./component/Sidmach/Ellipse.png";
import chart from "./component/Sidmach/chart.png";
import rectangle from "./component/Sidmach/rectangle.png";
import greenrec from "./component/Sidmach/greenrec.png";
import mockups from "./component/Sidmach/mockups.png";
const Vacancy = () => {
   
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <div className="dash-header">
              <h1>
                Hello Chetachi <img src="img/hand-wave.png" alt="" />
              </h1>{" "}
              <p>Welcome to your dashbord</p>
            </div>
            <div className="app-ov-card">
              <Container>
                <Row>
                  <Col>
                    <div className="cards-header">Applications Overview</div>

                    <Media className="stats-info">
                      <img src="img/success.png" alt="" />
                      <Media.Body>
                        <p> 0 successfull applications</p>
                      </Media.Body>
                    </Media>

                    <Media className="stats-info">
                      <img src="img/box2.png" alt="" />
                      <Media.Body>
                        <p> 0 successfull applications</p>
                      </Media.Body>
                    </Media>
                  </Col>
                  <Col>
                    <img src="img/Chart.png" alt="" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="overview-info mt-5">
                      <input type="checkbox" />

                      <p>You have an application success rate of 0%</p>
                    </div>
                  </Col>
                  <Col>
                    <Media className="stats-info mt-5 warning-info">
                      <img src="img/warning.png" alt="" />
                      <Media.Body>
                        <p> 0 Applications in last 7 days</p>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>

          <Col>
            <div className="app-ov-card card2">
              <Container>
                <Row className="align-center">
                  <img className='rectangle' src="img/rectangle.png" style={{width:'10px'}}  alt="" />

                  <h2>UI/UX Designer</h2>
                  <Row className="align-center">
                    {" "}
                    <button>APPLY NOW</button>
                  </Row>
                  
                </Row>
                <Col className='skills'>
                    <h4>Skills Required</h4>
                    <ul>
                      <li>Knowledgable familiarity with design tools,Figma, Adobe Xd.</li>
                      <li>Experience with design thinking methodologies, research.</li>
                      <li>Excellent verbal communication, writing , team works skills.</li>
                    </ul>
                </Col>
               
              </Container>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={8}>
            <div className="app-ov-card">
              <Container>
                <Row>
                  <div className="cards-header">Available Positions</div>
                </Row>

                <Row>
                  <Col>
                    <div className="positions-cards">
                        <img src="img/job-icon-1.png" alt="" />
                      <Row>
                      </Row>
                      <Row>
                        <h3>Frontend Web Developer</h3>
                      </Row>

                      <Row>
                        <p>
                          The web developer translates brands objectives into
                          code and is in charge of delivering a compelling
                          experience for all web visitors
                        </p>
                      </Row>

                      <Row>
                        <Col>
                          <div className="job-tag">Entry-level</div>
                        </Col>
                        <Col>
                          <div className="job-tag">Entry-level</div>
                        </Col>
                      </Row>

                      <Row>
                        <button className="blue-btn">APPLY NOW</button>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="positions-cards">
                      <Row>
                        <img src="img/job-icon-1.png" alt="" />
                      </Row>
                      <Row>
                        <h3>Frontend Web Developer</h3>
                      </Row>

                      <Row>
                        <p>
                          The web developer translates brands objectives into
                          code and is in charge of delivering a compelling
                          experience for all web visitors
                        </p>
                      </Row>

                      <Row>
                        <Col>
                          <div className="job-tag">Entry-level</div>
                        </Col>
                        <Col>
                          <div className="job-tag">Entry-level</div>
                        </Col>
                      </Row>

                      <Row>
                        <button className="blue-btn">APPLY NOW</button>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="positions-cards">
                      <Row>
                        <img src="img/job-icon-1.png" alt="" />
                      </Row>
                      <Row>
                        <h3>Frontend Web Developer</h3>
                      </Row>

                      <Row>
                        <p>
                          The web developer translates brands objectives into
                          code and is in charge of delivering a compelling
                          experience for all web visitors
                        </p>
                      </Row>

                      <Row>
                        <Col>
                          <div className="job-tag">Entry-level</div>
                        </Col>
                        <Col>
                          <div className="job-tag">Entry-level</div>
                        </Col>
                      </Row>

                      <Row>
                        <button className="blue-btn">APPLY NOW</button>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>

          <Col>
            

            <div className="luminate-vid">
            <img src="img/luminate-vid.png" alt="" />
            </div>

            <div className="luminate-logo">
              <img src="img/luminate-header.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vacancy;
