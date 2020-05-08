import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, ProgressBar, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Zoom, BackdropModal, Fade } from "../../Transition";
import PropagateLoader from "../../Transition/Spinner/PropagateLoader";
import ScoreModal from "./ScoreModal";

const DataCandidate = ({
  no,
  id,
  name,
  url,
  score,
  view,
  deleteApplicant,
  detailScore,
}) => {
  const [modalShow, setShowModal] = useState(false);
  const loading = useSelector((state) => state.applicants.loadingScore);

  const scoreModalHandler = () => {
    if (modalShow) {
      document.body.classList.remove("modal-open");
      setShowModal(false);
    } else {
      document.body.classList.add("modal-open");
      setShowModal(true);
    }
  };

  let scoreApplicant = <span>Not calculated yet</span>;
  if (loading && score <= 0) {
    scoreApplicant = <PropagateLoader />;
  }
  {
    if (score > 0) {
      scoreApplicant = (
        <span
          className="text-info hov-pointer text-decoration-none"
          onClick={scoreModalHandler}
        >
          <i className="fas fa-star mr-2" style={{ color: "orange" }}></i>
          {score}
        </span>
      );
    }
  }

  return (
    <>
      <motion.tr
        className="border-bottom"
        initial="initial"
        animate="in"
        exit="out"
        variants={Fade}
        key={no}
      >
        <th className="text-center align-middle">{no + 1}</th>
        <td className="text-center align-middle truncate">{name}</td>
        <td className="text-center align-middle text-truncate">
          {scoreApplicant}
        </td>
        <td className="text-center align-middle text-truncate">
          <Button
            variant="outline-danger"
            size="sm"
            className="mr-1"
            data-tip="Delete Profile"
            onClick={deleteApplicant}
          >
            <i className="far fa-trash-alt"></i>
          </Button>
          <Button
            variant="outline-info"
            size="sm"
            className="mr-1"
            data-tip="Detail Profile"
            onClick={view}
          >
            <i className="fas fa-eye"></i>
          </Button>
          <a
            className="btn btn-outline-primary btn-sm"
            href={url}
            target="_blank"
            role="button"
          >
            <i className="fab fa-linkedin" style={{ userSelect: "auto" }}></i>
          </a>
        </td>
        <td>
          <AnimatePresence key={id} exitBeforeEnter>
            {modalShow ? (
              <ScoreModal closeModal={scoreModalHandler} score={detailScore} />
            ) : null}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {modalShow ? (
              <motion.div
                className="modal-backdrop fade show"
                initial="initial"
                animate="in"
                exit="out"
                variants={BackdropModal}
              />
            ) : null}
          </AnimatePresence>
        </td>
      </motion.tr>
      <style jsx>{`
        .truncate {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :global(.hov-pointer) {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default DataCandidate;
