import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "../../../Transition/index";

const formScore = {
  score_experience: { value: 25, isValid: true, message: "" },
  score_education: { value: 15, isValid: true, message: "" },
  score_honor: { value: 10, isValid: true, message: "" },
  score_license: { value: 10, isValid: true, message: "" },
  score_skill: { value: 20, isValid: true, message: "" },
  score_current_position: { value: 20, isValid: true, message: "" },
  priority_univ: { value: "", isValid: true, message: "" },
};

const customCalculation = ({ back }) => {
  const [score, setScore] = useState(formScore);

  const {
    score_experience,
    score_education,
    score_honor,
    score_license,
    score_skill,
    score_current_position,
    priority_univ,
  } = score;
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Current Possition
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="20%"
                    value={score_current_position.value}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Experience
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="25%"
                    value={score_experience.value}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Skills
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10%"
                    value={score_skill.value}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Education
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="15%"
                    value={score_education.value}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Accomplishments
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10%"
                    value={score_honor.value}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Licenses
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10%"
                    value={score_license.value}
                  />
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
                  type="text"
                  placeholder="UI, UGM, ITB, ITS"
                  value={priority_univ.value}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Col md={6} className="mx-auto mt-1 text-center mb-4">
          <Button variant="outline-secondary" onClick={back}>
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Button>
          {"  "}
          <Button variant="outline-primary">Submit</Button>
        </Col>
      </Container>
    </motion.div>
  );
};

export default customCalculation;
