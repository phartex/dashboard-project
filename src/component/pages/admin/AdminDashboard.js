import React, { useEffect, useState } from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";
import "../../../Vacancy.css";
import { Bar } from "react-chartjs-2";
import { getVacancies } from "../../../actions/jobActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminDashboard = ({ vacancy: { vacancies, loading }, getVacancies }) => {
  useEffect(() => {
    getVacancies();
    document.body.style = "background: #fafafa;";
    //eslint-disable-next-line
  }, []);

  const [chardtData, setChartData] = useState({
    labels: ["HR Assistant", "Web Developer"],
    datasets: [
      {
        label: "Job Applications",
        data: [600, 350],
        backgroundColor: ["#076032", "#292f53"]
      }
    ]
  });

  if (loading || vacancies === null) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <Header />
      <Container>
        <Row className="dash-header">
          <Col md={6}>
            <h1>Hello HR</h1> <p>Welcome to your dashbord</p>
          </Col>
          <Col md={6} className="flex-end">
            <Link to="/new-position">
              <button>
                {" "}
                <img src="img/add-icon.png" alt="" /> &nbsp; Add Vacancy
              </button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
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
                    <Bar
                      data={chardtData}
                      width={100}
                      height={50}
                      options={{
                        title: {
                          display: true,
                          text: "largest apps",
                          fontSize: 25
                        },
                        legend: { display: true, position: "right" }
                      }}
                    />
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
          <Col className="cards-section ">
            <Link to="/job-positions">
              <div className="dash-cards purple-bg">
                <div className="counter">3</div>
                <h5>Vacancies</h5>
              </div>
            </Link>

            {/* <div className="dash-cards green-bg">
              <div className="counter">3</div>
              <h5>Job Openings</h5>
            </div> */}

            <div className="dash-cards">
              <div className="counter">3</div>
              <h5>Pending Applications</h5>
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
                  {!loading && vacancies.length === 0 ? (
                    <p>no vacancies available</p>
                  ) : (
                    vacancies.vacancies.map(vacancy => (
                      <Col key={vacancy.id} sm={4}>
                        <div className="positions-cards">
                          <img src="img/Rectangle1.png" alt="" />
                          <div className="position-cards-inner">
                            <Row>
                              <h3>{vacancy.jobTitle}</h3>
                            </Row>

                            <Row>
                              <p>{vacancy.description[0].jobDescriptions}</p>
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
                    ))
                  )}
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
      </Container>
    </div>
  );
};

AdminDashboard.propTypes = {
  vacancy: PropTypes.object.isRequired,
  getVacancies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  vacancy: state.vacancy
});

export default connect(mapStateToProps, { getVacancies })(AdminDashboard);
