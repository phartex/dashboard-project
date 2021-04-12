import React from "react";
import "../../Dash.css";
import { Container, Row, Col, Form /*Nav*/ } from "react-bootstrap";

const NewApplication = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8} className="new-app-header">
            <h1>New Application</h1>
            <p>
              Do you have what it takes to join our team of superstars? Submit
              this application and we will be in touch!
            </p>
          </Col>
          <Col className="align-end">
            <div className="new-app-img">
              <img src="img/form-img.png" alt="" />
            </div>
          </Col>
        </Row>

        <Row>
          <Form className="new-app-form">
            <Row>
              {" "}
              <input
                type="text"
                placeholder="FULL NAME"
                className="form-control new-app-form-field long-field"
              />
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="EMAIL ADDRESS"
                  className="form-control new-app-form-field short-field"
                />
              </Col>

              <Col>
                <input
                  type="text"
                  placeholder="MOBILE NUMBER"
                  className="form-control new-app-form-field short-field"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="DATE OF BIRTH"
                  className="form-control new-app-form-field short-field"
                />
              </Col>

              <Col>
                <input
                  type="text"
                  placeholder="ROLE YOU ARE APPLYING FOR"
                  className="form-control new-app-form-field short-field"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="TERITARY INSTITUTION"
                  className="form-control new-app-form-field short-field"
                />
              </Col>

              <Col>
                <input
                  type="text"
                  placeholder="CLASS OF DEGREE (CGPA GRADE)"
                  className="form-control new-app-form-field short-field"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="YEARS OF POST NYSC EXPERIENCE"
                  className="form-control new-app-form-field short-field"
                />
              </Col>

              <Col>
                <input
                  type="text"
                  placeholder="CURRENT ROLE"
                  className="form-control new-app-form-field short-field"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="CURRENT EMPLOYER"
                  className="form-control new-app-form-field short-field"
                />
              </Col>

              <Col>
                <input
                  type="text"
                  placeholder="ADDITIONAL PROFESSIONAL CERTIFICATIONS"
                  className="form-control new-app-form-field short-field"
                />
              </Col>
            </Row>

            <Row>
              {" "}
              <input
                type="text"
                placeholder="WHY SHOULD YOU BE SELECTED FOR THE ROLE"
                className="form-control new-app-form-field long-field"
              />
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="RELEVANT SKILLS"
                  className="form-control new-app-form-field short-field"
                />
              </Col>

              <Col>
                <input
                  type="text"
                  placeholder="CV"
                  className="form-control new-app-form-field short-field"
                />
              </Col>
            </Row>
            <Row className="new-app-btn">
              <button className="col-xs-12">SUBMIT</button>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default NewApplication;
