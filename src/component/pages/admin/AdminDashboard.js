import React, { useEffect } from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import Header from "../../layout/Header";
import { Link, BrowserRouter } from "react-router-dom";
import "../../../Vacancy.css";

const AdminDashboard = () => {
  useEffect(() => {
    document.body.style = "background: #fafafa;";
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <Row className="dash-header">
              <Col md={6}>
                <h1>Hello Chetachi</h1> <p>Welcome to your dashbord</p>
              </Col>
              <Col md={6} className="flex-end">
                <button>
                  {" "}
                  <img src="img/add-icon.png" alt="" /> &nbsp; Add Vacancy
                </button>
              </Col>
            </Row>

            <div className="app-ov-card">
              <Container>
                <Row>
                  <div className="cards-header">Applications Overview</div>
                </Row>
                <Row className="row-center-align">
                  <Col className="stats-info">
                    <Media>
                      <img src="img/success.png" alt="" />
                      <Media.Body>
                        <p> 0 successfull applications</p>
                      </Media.Body>
                    </Media>

                    <Media>
                      <img src="img/box2.png" alt="" />
                      <Media.Body>
                        <p> 0 successfull applications</p>
                      </Media.Body>
                    </Media>
                  </Col>
                  <Col>
                    <img src="img/Chart3.png" alt="" />
                  </Col>
                </Row>
                <Row>
                  <Media className="stats-info warning-info progress-info">
                    <img src="img/progress-icon .png" alt="" />
                    <Media.Body>
                      <p> 0 Applications in last 7 days</p>
                    </Media.Body>
                  </Media>
                </Row>
              </Container>
            </div>
          </Col>
          <Col>
            <div className="luminate-vid">
              <img src="img/luminate-vid.png" alt="" />
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
                      <img src="img/Rectangle1.png" alt="" />
                      <div className="position-cards-inner">
                        <Row>
                          <h3>UI/UX Designer</h3>
                        </Row>

                        <Row>
                          <p>
                            The UI/UX designer delivers the best product
                            experience for our users across all interfaces
                            ensuring customer satisfaction and loyalty
                          </p>
                        </Row>

                        <Row className="view-app-link">
                          <Link to="/view-applications">
                            <button className="blue-btn">
                              VIEW APPLICATIONS
                            </button>
                          </Link>
                        </Row>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="positions-cards">
                      <img src="img/Rectangle2.png" alt="" />
                      <div className="position-cards-inner">
                        <Row>
                          <h3>Web Developer</h3>
                        </Row>

                        <Row>
                          <p>
                            The web developer translates brands objectives into
                            code and is in charge of delivering a compelling
                            experience for all web visitors
                          </p>
                        </Row>

                        <Row>
                          <button className="blue-btn">
                            VIEW APPLICATIONS
                          </button>
                        </Row>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="positions-cards">
                      <img src="img/Rectangle3.png" alt="" />
                      <div className="position-cards-inner">
                        <Row>
                          <h3>HR Assistant</h3>
                        </Row>

                        <Row>
                          <p>
                            The HR assistant supports the Human resources team
                            in people management, talent sourcing and relevant
                            staff onboarding processes
                          </p>
                        </Row>

                        <Row>
                          <button className="blue-btn">
                            VIEW APPLICATIONS
                          </button>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;