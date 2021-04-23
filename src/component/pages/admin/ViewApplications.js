import React, { useEffect } from "react";
import Header from "../../layout/Header";
import { Container, Row, Col, Media } from "react-bootstrap";

const ViewApplications = () => {
  useEffect(() => {
    document.body.style = "background: #fafafa;";
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 job-desc">
          <Col className="job-name ">
            <h1>UI/UX Designer</h1>
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
            <p>
              The UI/UX designer delivers the best product experience for our
              users across all interfaces ensuring customer satisfaction and
              loyalty
            </p>
          </Col>
          <Col className="job-applicants flex-center">
            <Media>
              <img src="img/delete-icon.png" alt="" />
              <Media.Body>
                <p> 50 applications</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Chetachi Naomi Mkparu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col className="center-col">
            <button>
              {" "}
              <img src="img/application-icon.png" alt="" /> &nbsp; View CV
            </button>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Chetachi Naomi Mkparu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col className="center-col">
            <button>
              {" "}
              <img src="img/application-icon.png" alt="" /> &nbsp; View CV
            </button>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Chetachi Naomi Mkparu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col className="center-col">
            <button>
              {" "}
              <img src="img/application-icon.png" alt="" /> &nbsp; View CV
            </button>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row className="applicant-info mt-5">
          <Col className="applicant">
            <h3>Chetachi Naomi Mkparu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus{" "}
            </p>
          </Col>

          <Col className="center-col">
            <button>
              {" "}
              <img src="img/application-icon.png" alt="" /> &nbsp; View CV
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewApplications;
