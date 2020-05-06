import { useState } from "react";
import { Button, ButtonGroup, ProgressBar, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Zoom, BackdropModal, Fade } from "../../Transition";
import ScoreModal from "./ScoreModal";

const DataCandidate = ({ no, id, name, url, score, view, deleteApplicant }) => {
  const [modalShow, setShowModal] = useState(false);

  const scoreModalHandler = () => {
    setShowModal(!modalShow);
  };

  let scoreApplicant = <span>Not calculated yet</span>;
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
    <AnimatePresence exitBeforeEnter>
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
          {/*
          <AnimatePresence exitBeforeEnter key={modalShow}>
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
          */}
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
    </AnimatePresence>
  );
};

export default DataCandidate;
