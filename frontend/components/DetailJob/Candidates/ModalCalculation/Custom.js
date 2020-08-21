import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "../../../Transition/index";
import validator from "validator";
import cx from "classnames";
import { parseCookies } from "nookies";
import axios from "../../../../store/axios-instance";

const formScore = {
  score_experience: { value: "", isValid: true, message: "" },
  score_education: { value: "", isValid: true, message: "" },
  score_honor: { value: "", isValid: true, message: "" },
  score_license: { value: "", isValid: true, message: "" },
  score_skill: { value: "", isValid: true, message: "" },
  score_current_position: { value: "", isValid: true, message: "" },
  priority_univ: { value: "", isValid: true, message: "" },
};

const customCalculation = ({ jobId, back, calculate }) => {
  const [score, setScore] = useState(formScore);
  const { access_token } = parseCookies();
  const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };

  const submitHandler = (event) => {
    event.preventDefault();
    resetValidation();
    if (formIsValid()) {
      const data = {
        score_experience: +score.score_experience.value,
        score_education: +score.score_education.value,
        score_honor: +score.score_honor.value,
        score_license: +score.score_license.value,
        score_skill: +score.score_skill.value,
        score_current_position: +score.score_current_position.value,
        priority_univ: score.priority_univ.value,
      };
      axios
        .put(`/update-score/${jobId}`, data, headerCfg)
        .then((res) => {
          console.log("update score success =>", res.data);
          calculate(jobId);
        })
        .catch((err) => {
          console.log("update score fail =>", err.response);
          const state = JSON.parse(JSON.stringify(score));
          if (err.response && err.response.data) {
            for (let key in err.response.data) {
              if (state[key]) {
                state[key].isValid = false;
                state[key].value = state[key].value;
                state[key].message = "Value must be 1 until 100";
              }
            }
          }
          if (err.response && err.response.data.message) {
            state.score_license.isValid = false;
            state.score_license.value = state.score_license.value;
            state.score_license.message = "All score must be 100";
          }
          setScore(state);
        });
      console.log(data);
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    const data = {
      ...score,
      [name]: {
        ...score[name],
        value: value,
        isValid: true,
        message: "",
      },
    };
    setScore(data);
  };

  const resetValidation = () => {
    const state = JSON.parse(JSON.stringify(score));
    for (let key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        (state[key].isValid = true), (state[key].message = "");
      }
    }
    setScore(state);
  };

  const formIsValid = () => {
    const score_experience = { ...score.score_experience };
    const score_education = { ...score.score_education };
    const score_honor = { ...score.score_honor };
    const score_license = { ...score.score_license };
    const score_skill = { ...score.score_skill };
    const score_current_position = { ...score.score_current_position };
    const priority_univ = { ...score.priority_univ };
    let isGood = true;
    let sumAll =
      +score_experience.value +
      +score_education.value +
      +score_honor.value +
      +score_license.value +
      +score_skill +
      +score_current_position;

    if (
      validator.isEmpty(score_experience.value) ||
      !validator.isInt(score_experience.value, { min: 1, max: 100 })
    ) {
      score_experience.isValid = false;
      score_experience.message = "Value must be 1 until 100";
      isGood = false;
    }
    if (
      validator.isEmpty(score_education.value) ||
      !validator.isInt(score_education.value, { min: 1, max: 100 })
    ) {
      score_education.isValid = false;
      score_education.message = "Value must be 1 until 100";
      isGood = false;
    }
    if (
      validator.isEmpty(score_honor.value) ||
      !validator.isInt(score_honor.value, { min: 1, max: 100 })
    ) {
      score_honor.isValid = false;
      score_honor.message = "Value must be 1 until 100";
      isGood = false;
    }
    if (
      validator.isEmpty(score_license.value) ||
      !validator.isInt(score_license.value, { min: 1, max: 100 })
    ) {
      score_license.isValid = false;
      score_license.message = "Value must be 1 until 100";
      isGood = false;
    }
    if (
      validator.isEmpty(score_skill.value) ||
      !validator.isInt(score_skill.value, { min: 1, max: 100 })
    ) {
      score_skill.isValid = false;
      score_skill.message = "Value must be 1 until 100";
      isGood = false;
    }
    if (
      validator.isEmpty(score_current_position.value) ||
      !validator.isInt(score_current_position.value, { min: 1, max: 100 })
    ) {
      score_current_position.isValid = false;
      score_current_position.message = "Value must be 1 until 100";
      isGood = false;
    }
    if (validator.isNumeric(priority_univ.value)) {
      priority_univ.isValid = false;
      priority_univ.message = "Value must be text";
      isGood = false;
    }

    if (!isGood) {
      setScore({
        score_experience,
        score_education,
        score_honor,
        score_license,
        score_skill,
        score_current_position,
        priority_univ,
      });
    }
    return isGood;
  };

  const {
    score_experience,
    score_education,
    score_honor,
    score_license,
    score_skill,
    score_current_position,
    priority_univ,
  } = score;

  const experienceInvalid = cx({ "is-invalid": !score_experience.isValid });
  const educationInvalid = cx({ "is-invalid": !score_education.isValid });
  const honorInvalid = cx({ "is-invalid": !score_honor.isValid });
  const licenseInvalid = cx({ "is-invalid": !score_license.isValid });
  const skillInvalid = cx({ "is-invalid": !score_skill.isValid });
  const currentInvalid = cx({ "is-invalid": !score_current_position.isValid });
  const univInvalid = cx({ "is-invalid": !priority_univ.isValid });

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6} md={12}>
            <Form onSubmit={submitHandler}>
              <Form.Row>
                <Form.Group as={Col} lg={6} md={12}>
                  <Form.Label>
                    Current Possition
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    name="score_current_position"
                    type="number"
                    placeholder="30%"
                    className={currentInvalid}
                    value={score_current_position.value}
                    onChange={inputHandler}
                  />
                  {score_current_position.message && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {score_current_position.message}
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} lg={6} md={12}>
                  <Form.Label>
                    Experience
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    name="score_experience"
                    type="number"
                    placeholder="20%"
                    className={experienceInvalid}
                    value={score_experience.value}
                    onChange={inputHandler}
                  />
                  {score_experience.message && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {score_experience.message}
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} lg={6} md={12}>
                  <Form.Label>
                    Skills
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    name="score_skill"
                    type="number"
                    placeholder="20%"
                    className={skillInvalid}
                    value={score_skill.value}
                    onChange={inputHandler}
                  />
                  {score_skill.message && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {score_skill.message}
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} lg={6} md={12}>
                  <Form.Label>
                    Education
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    name="score_education"
                    type="number"
                    placeholder="10%"
                    className={educationInvalid}
                    value={score_education.value}
                    onChange={inputHandler}
                  />
                  {score_education.message && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {score_education.message}
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} lg={6} md={12}>
                  <Form.Label>
                    Accomplishments
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    name="score_honor"
                    type="number"
                    placeholder="10%"
                    className={honorInvalid}
                    value={score_honor.value}
                    onChange={inputHandler}
                  />
                  {score_honor.message && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {score_honor.message}
                    </small>
                  )}
                </Form.Group>

                <Form.Group as={Col} lg={6} md={12}>
                  <Form.Label>
                    Licenses
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    name="score_license"
                    type="number"
                    placeholder="10%"
                    className={licenseInvalid}
                    value={score_license.value}
                    onChange={inputHandler}
                  />
                  {score_license.message && (
                    <small className="form-text text-muted mt-0 mb-n2">
                      {score_license.message}
                    </small>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>
                  Priority university
                  <Form.Label className="text-danger font-italic fs-14px">
                    {"  "}
                    (optional)
                  </Form.Label>
                </Form.Label>
                <Form.Control
                  name="priority_univ"
                  type="text"
                  placeholder="UI, UGM, ITB, ITS"
                  className={univInvalid}
                  value={priority_univ.value}
                  onChange={inputHandler}
                />
                {priority_univ.message && (
                  <small className="form-text text-muted mt-0 mb-n2">
                    {priority_univ.message}
                  </small>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Col md={6} className="mx-auto mt-1 text-center mb-4">
          <Button variant="outline-secondary" onClick={back}>
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Button>
          {"  "}
          <Button variant="outline-primary" onClick={submitHandler}>
            Submit
          </Button>
        </Col>
      </Container>
    </motion.div>
  );
};

export default customCalculation;
