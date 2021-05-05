import React, { useEffect } from "react";
import Header from "../../layout/Header";
import { Container, Row, Col, Media } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobPositions = () => {
  useEffect(() => {
    document.body.style = "background: #fafafa;";
  }, []);
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
              <Link to='new-position'>
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

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Front End Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col md={4} className="center-col">
            <Link to="/view-applications">
              <button>
                {" "}
                <i className="far fa-file-alt"></i> &nbsp; View applicants
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>HR assistant</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col md={4} className="center-col">
            <Link to="/view-applications">
              <button>
                {" "}
                <i className="far fa-file-alt"></i> &nbsp; View applicants
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Backend developer </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col md={4} className="center-col">
            <Link to="/view-applications">
              <button>
                {" "}
                <i className="far fa-file-alt"></i> &nbsp; View applicants
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Product manager</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col md={4} className="center-col">
            <Link to="/view-applications">
              <button>
                {" "}
                <i className="far fa-file-alt"></i> &nbsp; View applicants
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobPositions;
