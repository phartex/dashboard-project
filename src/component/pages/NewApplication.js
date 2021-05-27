import React, { useState } from "react";
import "../../Dash.css";
import DatePicker from "react-datepicker";
import { Container, Row, Col, Form } from "react-bootstrap";
import StepProgressBar from "react-step-progress";
import Header from "../layout/Header";
import "react-step-progress/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { submitApplication } from "../../actions/applicationActions";
// let file = "";

const NewApplication = ({ submitApplication }) => {
  // const [files, setFiles] = useState([]);
  const [date, setDate] = useState(new Date());
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [tetInstitution, setTetInstitution] = useState("");
  const [classOfDegree, setClassOfDegree] = useState("");
  const [yearofExperience, setYearOfExperience] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [currentEmployer, setCurrentEmployer] = useState("");
  const [professionalCertificate, setProfessionalCertificate] = useState("");
  const [whyRole, setWhyRole] = useState("");
  const [relevantSkills, setRelevantSkills] = useState("");
  const [cv, setCv] = useState("");
  const [jobID, setJobID] = useState("");

  const step1Content = (
    <div className="new-app-form">
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
            name="fullname"
            defaultValue={fullname}
            onChange={e => setFullname(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="gender">
        <Col>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Control
              as="select"
              size="lg"
              custom
              className="form-control new-app-form-field short-field"
              placeholder="Gender"
            >
              <option default>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            className="form-control new-app-form-field short-field"
            name="date"
            defaulValue={date}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Home Address"
            className="form-control new-app-form-field long-field"
            defaultValue={relevantSkills}
            name="relevantSkills"
            onChange={e => setRelevantSkills(e.target.value)}
          />
        </Col>
      </Row>
    </div>
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
            name="tetInstitution"
            defaultValue={tetInstitution}
            onChange={e => setTetInstitution(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Class of Degree"
            className="form-control new-app-form-field short-field"
            name="classOfDegree"
            defaultValue={classOfDegree}
            onChange={e => setClassOfDegree(e.target.value)}
          />
        </Col>

        <Col>
          <input
            className="form-control new-app-form-field short-field"
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChangeFile}
            // ref={input => {
            //   file = input;
            // }}
            multiple
            name="professionalCErtificate"
            defaultValue={professionalCertificate}
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
            name="currentEmployer"
            defaultValue={currentEmployer}
            onChange={e => setCurrentEmployer(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Current Role"
            className="form-control new-app-form-field short-field"
            name="currentRole"
            defaultValue={currentRole}
            onChange={e => setCurrentRole(e.target.value)}
          />
        </Col>

        <Col>
          <input
            type="text"
            placeholder="Years Of Post Nysc Experience"
            className="form-control new-app-form-field short-field"
            name="yearofExperience"
            defaultValue={yearofExperience}
            onChange={e => setYearOfExperience(e.target.value)}
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
        name="whyRole"
        defaultValue={whyRole}
        onChange={e => setWhyRole(e.target.value)}
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
            name="cv"
            defaultValue={cv}
            // ref={input => {
            //   file = input;
            // }}
            multiple
          />
        </Col>
      </Row>
    </Form>
  );

  // function step2Validator() {
  //   // return a boolean
  // }

  // function step3Validator() {
  //   // return a boolean
  // }
  function handleChangeFile(event) {
    console.log(event.target.files);
    setCv(event.target.files);
  }

  const onFormSubmit = e => {
    // handle the submit logic here
    // This function will be executed at the last step

    const data = {
      fullname,
      phoneNumber,
      email,
      dob: date,
      role,
      tetInstitution,
      classOfDegree,
      yearofExperience,
      currentRole,
      currentEmployer,
      jobID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      professionalCertificate,
      whyRole,
      relevantSkills,
      cv
    };
    console.log(data);
    submitApplication(data);
    swal({
      title: "Good job!",
      text: "Application was Successfull",
      icon: "success"
    });

    //clear fields
    setFullname("");
    setPhoneNumber("");
    setEmail("");
    setDate("");
    setRole("");
    setTetInstitution("");
    setClassOfDegree("");
    setYearOfExperience("");
    setCurrentRole("");
    setCurrentEmployer("");
    setJobID("");
    setProfessionalCertificate("");
    setWhyRole("");
    setRelevantSkills("");
    setCv("");
    // when the submit button (next button in the previous steps) is pressed
  };

  return (
    <div>
      <Header />
      <Container className="new-app-container ">
        <Col sm={9} className="new-app-header">
          <h1>New Application</h1>
          <p>
            Do you have what it takes to join our team of superstars? Submit
            this application and we will be in touch!
          </p>
        </Col>

        <Row className="form-card whole-form">
          <StepProgressBar
            className="test"
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

NewApplication.propTypes = {
  submitApplication: PropTypes.func.isRequired
};

export default connect(null, { submitApplication })(NewApplication);
