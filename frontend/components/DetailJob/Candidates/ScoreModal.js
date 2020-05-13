import { useSelector } from "react-redux";
import { ProgressBar, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { Zoom } from "../../Transition";

const ScoreModal = React.memo(({ closeModal, score }) => {
  const scoreJob = useSelector((state) => state.jobs.jobData.overall_score);
  const {
    score_education,
    score_license,
    score_skill,
    score_experience,
    score_current_position,
    score_honor,
  } = scoreJob;

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
              <span className="font-italic text-danger fs-15">
                ({score_current_position}%)
              </span>
            </span>
            <ProgressBar
              animated
              max={score_current_position}
              now={current_position}
              label={current_position + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Experience{" "}
              <span className="font-italic text-danger fs-15">
                ({score_experience}%)
              </span>
            </span>
            <ProgressBar
              animated
              max={score_experience}
              now={experience}
              label={experience + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Skills{" "}
              <span className="font-italic text-danger fs-15">
                ({score_skill}%)
              </span>
            </span>
            <ProgressBar
              animated
              max={20}
              now={skill}
              label={skill + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Education{" "}
              <span className="font-italic text-danger fs-15">
                ({score_education}%)
              </span>
            </span>
            <ProgressBar
              animated
              max={score_education}
              now={education}
              label={education + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Accomplishments{" "}
              <span className="font-italic text-danger fs-15">
                ({score_honor}%)
              </span>
            </span>
            <ProgressBar
              animated
              max={score_honor}
              now={honor}
              label={honor + "%"}
              className="h-20px mt-2 mb-2"
            />

            <span>
              Licenses & Certifications{" "}
              <span className="font-italic text-danger fs-15">
                ({score_license}%)
              </span>
            </span>
            <ProgressBar
              animated
              max={score_license}
              now={license}
              label={license + "%"}
              className="h-20px mt-2 mb-2"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ScoreModal;
