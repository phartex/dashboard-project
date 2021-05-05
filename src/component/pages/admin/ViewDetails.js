import React, { useEffect } from "react";
import "../../../Vacancy.css";
import "../../../Dash.css";
import { Container, Row, Col, Media } from "react-bootstrap";
import Header from "../../layout/Header";

const ViewDetails = () => {
  useEffect(() => {
    document.body.style = "background: #fafafa;";
  }, []);
  return (
    <div>
      <Header />
      <Container className="page-container">
        <div className="app-ov-card details-card">
          <Container>
            <Row>
              <h2>Details</h2>
            </Row>
            <hr />
            <Row>
              <Col md={5}>Name :</Col>
              <Col>Tioluwani Joseph</Col>
            </Row>

            <Row className="mt-2">
              <Col md={5}>Email :</Col>
              <Col>Tioluwanijoseph@gmail.com</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Skills :</Col>
              <Col>HTML , Css, React, Javascript</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Address :</Col>
              <Col>No 11, magodo phase1</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Teritary institution :</Col>
              <Col>Babcock university</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Class of degree :</Col>
              <Col>First class</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Years of Experience :</Col>
              <Col>5</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Job type :</Col>
              <Col>Front-end developer</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Certifications :</Col>
              <Col>MSC, BSC, OND, Microsoft certified</Col>
            </Row>

            <Row className="mt-2">
              <Col md={5}>Gender :</Col>
              <Col>MALE</Col>
            </Row>

            <Row className="mt-2">
              <Col md={5}>Date of birth :</Col>
              <Col>20/01/1878</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Current Employer :</Col>
              <Col>Sidmach</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Current Role :</Col>
              <Col>Junior developer</Col>
            </Row>
            <Row className="mt-2">
              <Col md={5}>Personal achievments :</Col>
              <Col>built 4 projects used by billions</Col>
            </Row>

            <Row className="mt-2">
              <Col md={5}>Reason to work with sidmach :</Col>
              <Col>Lorem ipsum</Col>
            </Row>

            <Row className="mt-2">
              <Col md={5}>
                Reason applicant should be selected for the role :
              </Col>
              <Col>Lorem ipsum ipswich</Col>
            </Row>
            <Row className="mt-5">
              <h2>Actions</h2>
            </Row>
            <hr />
            <Row className="action-btn">
              <Col>
                <button>
                  {" "}
                  <i className="fas fa-download"></i> &nbsp;download
                </button>
              </Col>
              <Col>
                <button className="approve-btn ">
                  {" "}
                  <i className="fas fa-thumbs-up"></i> &nbsp; Approve
                </button>
              </Col>
              <Col>
                <button className="danger-btn mb-2 ">
                  <i className="far fa-trash-alt"></i> &nbsp; Delete
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default ViewDetails;
