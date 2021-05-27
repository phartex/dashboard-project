import React, { useState } from "react";
import { connect } from "react-redux";
import "../../../Vacancy.css";
import "../../../Dash.css";
import { Container, Row, Form } from "react-bootstrap";
import Header from "../../layout/Header";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { addVacancies } from "../../../actions/jobActions";

const NewPosition = ({ addVacancies }) => {
  const [position, setPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLevel, setJobLevel] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    if (position === "" || jobDescription === "" || jobLevel === "") {
      alert("Please fill in all fields!");
    } else {
      const data = {
        JobTitle: position,

        JobLevel: jobLevel,
        Description: [jobDescription],
        Requirement: []
      };
      console.log(data);

      addVacancies(data);

      swal({
        title: "Good job!",
        text: "You created a new job position!",
        icon: "success"
      });

      //clear fields

      setPosition("");
      setJobDescription("");
      setJobLevel("");
    }
  };
  return (
    <div>
      <Header />
      <Container className="np-container">
        <div className="form-card np-card">
          <div className="form-card-header">
            <h3>CREATE A NEW JOB POSITION</h3>
          </div>
          <form onSubmit={onFormSubmit}>
            <Row md={6} className="input-container">
              <input
                type="text"
                placeholder="Job Name"
                className="form-control new-app-form-field mid-field"
                name="position"
                value={position}
                onChange={e => setPosition(e.target.value)}
              />
            </Row>

            <Row className="input-container">
              <textarea
                type="text"
                placeholder="Job description"
                className="form-control new-app-form-field mid-field"
                name="jobDescription"
                value={jobDescription}
                onChange={e => setJobDescription(e.target.value)}
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
                  name="jobLevel"
                  value={jobLevel}
                  onChange={e => setJobLevel(e.target.value)}
                >
                  <option default>Job level</option>
                  <option value="Entry">Entry level</option>
                  <option value="Mid">Mid-level</option>
                  <option value="Senior">Senior-level</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row className="input-container">
              <button className="form-btn" type="submit">
                Create{" "}
              </button>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};

NewPosition.propTypes = {
  addVacancies: PropTypes.func.isRequired
};

export default connect(null, { addVacancies })(NewPosition);
