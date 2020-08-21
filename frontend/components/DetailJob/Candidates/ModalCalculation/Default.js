import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade } from "../../../Transition/index";
import style from "../../../Header/Header.module.css";

const defaultCalculation = ({ viewCustomCalc, calculate }) => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6} md={12}>
            <h2 className={`${`text-center`} ${style.ff_yeseva}`}>
              Hi Recruiters.
            </h2>
            <p className="text-center text-muted lh-15">
              <small>
                With custom calculation you can manage calculation of your
                applicant according to the standards of your company
                <br /> or you can just use our default setting
              </small>
            </p>
          </Col>
        </Row>

        <Col lg={6} md={12} className="mx-auto mt-1 text-center mb-4">
          <Button variant="outline-danger" onClick={viewCustomCalc} className="mb-1">
            Costum calculation
          </Button>
          {"  "}
          <Button variant="outline-info" onClick={calculate}>
            Default setting
          </Button>
        </Col>
      </Container>
    </motion.div>
  );
};

export default defaultCalculation;
