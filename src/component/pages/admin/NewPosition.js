import React, { useEffect } from "react";
import "../../../Vacancy.css";
import "../../../Dash.css";
import { Container, Row, Form, Col, Media } from "react-bootstrap";
import Header from "../../layout/Header";
import swal from "sweetalert";

const NewPosition = () => {
  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    swal({
      title: "Good job!",
      text: "You created a new job position!",
      icon: "success"
    });
    // when the submit button (next button in the previous steps) is pressed
  }
  return (
    <div>
      <Header />
      <Container className="np-container">
        <div className="form-card np-card">
          <div className="form-card-header">
            <h3>CREATE A NEW JOB POSITION</h3>
          </div>
          <Row md={6} className="input-container">
            <input
              type="text"
              placeholder="Job Name"
              className="form-control new-app-form-field mid-field"
            />
          </Row>

          <Row className="input-container">
            <input
              type="text"
              placeholder="Job description"
              className="form-control new-app-form-field mid-field"
            />
          </Row>
          <Row>
            <Form.Group
              controlId="exampleForm.SelectCustomSizeSm"
              className="input-container"
            >
              <Form.Control
                as="select"
                size="lg"
                custom
                className="form-control new-app-form-field mid-field"
                placeholder="Gender"
              >
                <option default>Job level</option>
                <option>Entry level</option>
                <option>Mid-level</option>
                <option>Senior-level</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="input-container">
            <button className="form-btn" onClick={onFormSubmit}>
              Create{" "}
            </button>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NewPosition;
