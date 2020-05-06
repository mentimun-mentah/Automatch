import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "../../../Transition/index";

const customCalculation = ({ back }) => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Experience
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control type="text" placeholder="35%" />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Skills
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control type="text" placeholder="30%" />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Accomplishments
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control type="text" placeholder="10%" />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    Licenses
                    <Form.Label className="text-danger">*</Form.Label>
                  </Form.Label>
                  <Form.Control type="text" placeholder="10%" />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>
                  Education
                  <Form.Label className="text-danger">*</Form.Label>
                </Form.Label>
                <Form.Control type="text" placeholder="15%" />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Priority university
                  <Form.Label className="text-danger font-italic fs-14px">
                    {"  "}
                    (optional)
                  </Form.Label>
                </Form.Label>
                <Form.Control type="text" placeholder="UI, UGM, ITB, ITS" />
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
