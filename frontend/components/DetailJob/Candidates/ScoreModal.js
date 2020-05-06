import { Button, ButtonGroup, ProgressBar, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Zoom } from "../../Transition";

const ScoreModal = ({ closeModal, score }) => {
  const {
    current_position,
    experience,
    skill,
    education,
    honor,
    license,
  } = score;

  return (
    <motion.div
      className="modal show d-block"
      initial="initial"
      animate="in"
      exit="out"
      variants={Zoom}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Modal.Header closeButton onClick={closeModal}>
            <h5 className="modal-title">Overall Score</h5>
          </Modal.Header>
          <div className="modal-body">
            <span>
              Current Possition{" "}
              <span className="font-italic text-danger fs-15">(20%)</span>
            </span>
            <ProgressBar
              animated
              now={current_position}
              label={current_position + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Experience{" "}
              <span className="font-italic text-danger fs-15">(25%)</span>
            </span>
            <ProgressBar
              animated
              now={experience}
              label={experience + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Skills{" "}
              <span className="font-italic text-danger fs-15">(20%)</span>
            </span>
            <ProgressBar
              animated
              now={skill}
              label={skill + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Education{" "}
              <span className="font-italic text-danger fs-15">(15%)</span>
            </span>
            <ProgressBar
              animated
              now={education}
              label={education + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Accomplishments{" "}
              <span className="font-italic text-danger fs-15">(10%)</span>
            </span>
            <ProgressBar
              animated
              now={honor}
              label={honor + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Licenses & Certifications{" "}
              <span className="font-italic text-danger fs-15">(10%)</span>
            </span>
            <ProgressBar
              animated
              now={license}
              label={license + "%"}
              className="h-20px mt-2 mb-2"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScoreModal;
