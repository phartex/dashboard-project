import React, { useEffect } from "react";
import Header from "../../layout/Header";
import { Container, Row, Col, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteVacancy, getVacancies } from "../../../actions/jobActions";
import PropTypes from "prop-types";

const JobPositions = ({
  vacancy: { vacancies, loading },
  getVacancies,
  deleteVacancy
}) => {
  useEffect(() => {
    getVacancies();
    document.body.style = "background: #fafafa;";
    //eslint-disable-next-line
  }, []);

  const onDelete = vacancy => {
    deleteVacancy(vacancy.id);
    console.log(vacancy.id);
    alert("successfully deleted");
  };
  if (loading || vacancies === null) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 job-desc">
          <Col className="job-name ">
            <h1>Job Openings</h1>
          </Col>
          <Col className="job-applicants flex-center">
            <Media>
              <img src="img/applicants-icon.png" alt="" />
              <Media.Body>
                <p> 50 applications</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="job-info job-applicants">
            <p>Current available job openings</p>
          </Col>
          <Col className="job-applicants flex-center">
            <Link to="new-position">
              <Media>
                <i
                  className="far fa-plus-square fa-2x"
                  style={{ color: "rgba(0, 0, 0, 0.5)" }}
                ></i>
                <Media.Body>
                  <p> &nbsp; &nbsp; Create Position</p>
                </Media.Body>
              </Media>
            </Link>
          </Col>
        </Row>
      </Container>

      <hr />
      <div>
        {!loading && vacancies.length === 0 ? (
          <p>no vacancies available</p>
        ) : (
          vacancies.vacancies.map(vacancy => (
            <Container key={vacancy.id}>
              <Row className="applicant-info mt-5">
                <Col className="applicant">
                  <h3>{vacancy.jobTitle}</h3>
                  <p>{vacancy.description[0].jobDescriptions}</p>
                </Col>

                {/* <Col md={4} className="center-col">
                  <Link to="/view-applications">
                    <button>
                      {" "}
                      <i className="far fa-file-alt"></i> &nbsp; View applicants
                    </button>
                  </Link>
                </Col> */}
                <Col md={1}>
                  <a href="#" onClick={() => onDelete(vacancy)}>
                    <i
                      className="far fa-trash-alt fa-2x mt-2"
                      style={{ color: "grey" }}
                    />
                  </a>
                </Col>
              </Row>
              <hr />
            </Container>
          ))
        )}
      </div>
    </div>
  );
};

JobPositions.propTypes = {
  vacancy: PropTypes.object.isRequired,
  deleteVacancies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  vacancy: state.vacancy
});

export default connect(mapStateToProps, { getVacancies, deleteVacancy })(
  JobPositions
);
