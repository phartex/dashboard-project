import React from "react";
import "../../Dash.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import StepProgressBar from "react-step-progress";
import Header from "../layout/Header";
import "react-step-progress/dist/index.css";

const NewApplication = () => {
  const step1Content = (
    <Form className="new-app-form">
      <Row>
        <Col>
          <input
            type="text"
            placeholder="FULL NAME"
            className="form-control new-app-form-field short-field"
          />
        </Col>
        <Col>
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className="form-control new-app-form-field short-field"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <input
            type="text"
            placeholder="MOBILE NUMBER"
            className="form-control new-app-form-field short-field"
          />
        </Col>

        <Col>
          <input
            type="text"
            placeholder="DATE OF BIRTH"
            className="form-control new-app-form-field short-field"
          />
        </Col>
      </Row>

      <Row>
        <Col></Col>

        {/* <Col>
          <input
            type="text"
            placeholder="ROLE YOU ARE APPLYING FOR"
            className="form-control new-app-form-field short-field"
          />
        </Col> */}
      </Row>

      {/* <Row>
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
      </Row> */}

      {/* <Row>
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
      </Row> */}

      {/* <Row>
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
      </Row> */}

      {/* <Row>
        {" "}
        <input
          type="text"
          placeholder="WHY SHOULD YOU BE SELECTED FOR THE ROLE"
          className="form-control new-app-form-field long-field"
        />
      </Row> */}

      {/* <Row>
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
      </Row> */}
      {/* <Row className="new-app-btn">
        <button className="col-xs-12">SUBMIT</button>
      </Row> */}
    </Form>
  );
  const step2Content = (
    <Form className="new-app-form">
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
    </Form>
  );
  const step3Content = (
    <h1>
      <Form className="new-app-form">
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
      </Form>
    </h1>
  );

  const step4Content = (
    <h1>
      <Form className="new-app-form">
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
      </Form>
    </h1>
  );

  const step5Content = (
    <h1>
      <Form className="new-app-form">
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
      </Form>
    </h1>
  );

  function step2Validator() {
    // return a boolean
  }

  function step3Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }
  return (
    <div>
      <Header />
      <Container>
        <Col sm={8} className="new-app-header">
          <h1>New Application</h1>
          <p>
            Do you have what it takes to join our team of superstars? Submit
            this application and we will be in touch!
          </p>
        </Col>

        <Row className="form-card">
          <img src="img/person1.jpeg" alt="" />
          <StepProgressBar
            startingStep={0}
            onSubmit={onFormSubmit}
            steps={[
              {
                label: "20%",
                subtitle: "Completed",
                name: "step 1",
                content: step1Content
              },
              {
                label: "40%",
                subtitle: "Completed",
                name: "step 2",
                content: step2Content
                // validator: step2Validator
              },
              {
                label: "60%",
                subtitle: "Completed",
                name: "step 3",
                content: step3Content
              },
              {
                label: "80%",
                subtitle: "Completed",
                name: "step 3",
                content: step4Content
              },
              {
                label: "100%",
                subtitle: "Completed",
                name: "step 3",
                content: step5Content
              }
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

export default NewApplication;
