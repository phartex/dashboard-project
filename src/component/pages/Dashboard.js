import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../layout/Header";
import PropTypes from "prop-types";
import "../../Vacancy.css";
import { getVacancies } from "../../actions/jobActions";

const Vacancy = ({ vacancy: { vacancies, loading }, getVacancies }) => {
  useEffect(() => {
    getVacancies();
    document.body.style = "background: #fafafa;";
    //eslint-disable-next-line
  }, []);

  if (loading || vacancies === null) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <div className="dash-header">
              <h1>Hello Chetachi</h1>
            </div>
            <div className="dash-header">
              <p>Welcome to your dashbord</p>
            </div>
            <div className="app-ov-card">
              <Container>
                <Row>
                  <div className="cards-header">Available Positions</div>
                </Row>

                <Row className="whole-cards">
                  {!loading && vacancies.length === 0 ? (
                    <p>no vacancies available</p>
                  ) : (
                    vacancies.vacancies.map(vacancy => (
                      <Col key={vacancy.id} sm={4}>
                        <div className="positions-cards">
                          <img src="img/Rectangle2.png" alt="" />
                          <div className="position-cards-inner">
                            <Row>
                              <h3>{vacancy.jobTitle}</h3>
                            </Row>

                            <Row>
                              <p>{vacancy.description[0].jobDescriptions}</p>
                            </Row>

                            <Row>
                              <Col>
                                <div className="job-tag">
                                  {vacancy.jobLevel}-level
                                </div>
                              </Col>
                              <Col>
                                <button className="blue-btn">APPLY NOW</button>
                              </Col>
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

        <Row className="mt-5">
          <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  );
};

Vacancy.propTypes = {
  vacancy: PropTypes.object.isRequired,
  getVacancies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  vacancy: state.vacancy
});

export default connect(mapStateToProps, { getVacancies })(Vacancy);
