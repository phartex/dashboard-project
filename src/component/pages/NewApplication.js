import React, { useState } from "react";
import "../../Dash.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import StepProgressBar from "react-step-progress";
import Header from "../layout/Header";
import "react-step-progress/dist/index.css";
let file = "";
const NewApplication = () => {
  const [files, setFiles] = useState([]);

  const step1Content = (
    <Form className="new-app-form">
      <img
        src="img/pi1.png
          "
        alt=""
      />
      <Row>
        <Col>
          <input
            type="text"
            placeholder="FULL NAME"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Gender"
            className="form-control new-app-form-field short-field"
          />
        </Col>

        <Col>
          <input
            type="text"
            placeholder="Date of Birth"
            className="form-control new-app-form-field short-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Home Address"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
    </Form>
  );
  const step2Content = (
    <Form className="new-app-form">
      <img
        src="img/pi2.png
          "
        alt=""
      />
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Teritary institution"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Class of Degree"
            className="form-control new-app-form-field short-field"
          />
        </Col>

        <Col>
          <input
            className="form-control new-app-form-field short-field"
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChangeFile}
            ref={input => {
              file = input;
            }}
            multiple
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Special Awards/Honors"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
    </Form>
  );
  const step3Content = (
    <Form className="new-app-form">
      <img
        src="img/pi1.png
        "
        alt=""
      />
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Current Employer"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Current Role"
            className="form-control new-app-form-field short-field"
          />
        </Col>

        <Col>
          <input
            type="text"
            placeholder="Years Of Post Nysc Experience"
            className="form-control new-app-form-field short-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Personal Achievments"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
    </Form>
  );

  const step4Content = (
    <Form className="new-app-form">
      <img
        src="img/pi2.png
          "
        alt=""
      />
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Role you are applying for"
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Why do you want to work at Sidmach? "
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
      <input
        type="text"
        placeholder="Why should you be selected for the role? "
        className="form-control new-app-form-field long-field"
      />
      <Row></Row>
    </Form>
  );

  const step5Content = (
    <Form className="new-app-form">
      <img
        src="img/pi1.png
          "
        alt=""
      />
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Why do you want to work at Sidmach? "
            className="form-control new-app-form-field long-field"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            className="form-control new-app-form-field long-field"
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChangeFile}
            ref={input => {
              file = input;
            }}
            multiple
          />
        </Col>
      </Row>
    </Form>
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

  function handleChangeFile(event) {
    console.log(event.target.files);
    // let duplicateFile = {};
    // if (file.files.length > 0) {
    //   duplicateFile = this.state.files.find((doc) => doc.fileName === file.files[0].name);
    //   if (isEmpty(duplicateFile)) {
    //     const currentFiles = this.state.files;
    //     currentFiles.push({
    //       fileInput: file.files[0],
    //       fileName: file.files[0].name,
    //     });
    //     this.setState({
    //       files: currentFiles,
    //     }, () => console.log(this.state.files));
    //   }
    // }
  }
  return (
    <div>
      <Header />
      <Container className="new-app-container">
        <Col sm={9} className="new-app-header">
          <h1>New Application</h1>
          <p>
            Do you have what it takes to join our team of superstars? Submit
            this application and we will be in touch!
          </p>
        </Col>

        <Row className="form-card">
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
