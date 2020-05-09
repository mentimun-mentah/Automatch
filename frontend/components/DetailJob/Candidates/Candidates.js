import { useState, useCallback, useEffect, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { BackdropModal, LeftToRight } from "../../Transition";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../../store/actions";
import DefaulCalculation from "./ModalCalculation/Default";
import CustomCalculation from "./ModalCalculation/Custom";

const Candidates = ({ submit, change, value, children, validLink, jobId }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [customView, setCustomView] = useState(false);
  const [enteredFilter, setEnteredFilter] = useState("");

  const modal = useSelector((state) => state.applicants.modal);
  const applicantData = useSelector((state) => state.applicants.applicant);

  const onGetScoreApplicant = useCallback(
    (jobId) => dispatch(actions.getScoreApplicant(jobId)),
    [dispatch]
  ); // GET SCORE APPLICANT

  const onSearchApplicant = useCallback(
    (search, jobId) => dispatch(actions.searchApplicant(search, jobId)),
    [dispatch]
  ); // GET SCORE APPLICANT

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        if (enteredFilter.length > 0) {
          onSearchApplicant(enteredFilter, jobId);
        }
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef]);

  useEffect(() => {
    if (applicantData) {
      const loadedApplicant = [];
      for (let key in applicantData) {
        loadedApplicant.push({ ...applicantData[key] });
      }
      dispatch(actions.searchApplicantSuccess(loadedApplicant));
    }
  }, [dispatch]);

  const showModalHandler = () => {
    document.body.classList.add("modal-open");
    setModalShow(true);
  };

  const customCalcHandler = () => {
    setCustomView(!customView);
  };

  const closeModalHandler = () => {
    document.body.classList.remove("modal-open");
    setModalShow(false);
    setCustomView(false);
  };

  const calculateHandler = (jobId) => {
    onGetScoreApplicant(jobId);
    document.body.classList.remove("modal-open");
    setModalShow(false);
    setCustomView(false);
  };

  const defaultModal = () => {
    document.body.classList.remove("modal-open");
    setModalShow(false);
    dispatch(actions.modalReset());
  };

  if (modal === false) {
    defaultModal();
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={LeftToRight}
    >
      <div className="row mb-3 mt-3 align-items-md-center">
        <div className="col">
          <h2>Candidates : </h2>
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className="col-3">Search</div>
            <div className="col">
              <input
                ref={inputRef}
                className="form-control form-control-sm"
                type="text"
                placeholder="by name"
                value={enteredFilter}
                onChange={(event) => setEnteredFilter(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="table-head">
        <table className="table mb-0">
          <thead>
            <tr className="table-active">
              <th scope="col" className="pl-3 pr-2">
                No
              </th>
              <th scope="col" className="pl-5">
                Name
              </th>
              <th scope="col">Score</th>
              <th scope="col" className="pl-2">
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table-scroll mb-3">
        <table className="table">
          <AnimatePresence exitBeforeEnter>
            <tbody>{children}</tbody>
          </AnimatePresence>
        </table>
      </div>

      <Button variant="secondary" className="mr-2" onClick={showModalHandler}>
        <i className="far fa-sync mr-2"></i>Calculate!
      </Button>
      <Button variant="info">
        <i className="far fa-print mr-2"></i>Print A Report
      </Button>

      <Form>
        <Form.Group className="mb-0">
          <h5 className="font-weight-normal mt-4">Candidate Link Input : </h5>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={change}
            value={value}
            onKeyPress={change}
          />
        </Form.Group>
        <button
          type="button"
          className="btn btn-sm btn-block text-white mt-2"
          style={{ backgroundColor: "#0b5481" }}
          onClick={submit}
        >
          Submit
        </button>
      </Form>
      <p
        className={
          validLink
            ? "font-italic mt-2 fs-14"
            : "font-italic mt-2 fs-14 text-danger"
        }
      >
        You have to seperate the links with ENTER key!
      </p>

      <AnimatePresence exitBeforeEnter>
        {modalShow ? (
          <motion.div
            className="modal"
            style={{ display: "block" }}
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="bar top"></div>
                <div className="bar right delay1"></div>
                <div className="bar bottom delay2"></div>
                <div className="bar left"></div>
                <Modal.Header
                  className="border-0 pb-0 ml-auto"
                  closeButton
                  onClick={closeModalHandler}
                ></Modal.Header>
                <Modal.Body>
                  <AnimatePresence exitBeforeEnter key={customView}>
                    {customView ? (
                      <CustomCalculation
                        back={customCalcHandler}
                        calculate={calculateHandler}
                        jobId={jobId}
                      />
                    ) : (
                      <DefaulCalculation
                        viewCustomCalc={customCalcHandler}
                        calculate={() => calculateHandler(jobId)}
                      />
                    )}
                  </AnimatePresence>
                </Modal.Body>
              </div>
            </div>
          </motion.div>
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
          ></motion.div>
        ) : null}
      </AnimatePresence>

      <style jsx>{`
        .modal-content {
          border: none !important;
          border-radius: 0px !important;
          overflow: hidden !important;
        }
        .bar {
          position: absolute;
          width: 50px;
          height: 5px;
          background: #23ace6;
          transition: all 2s linear;
          -webkit-animation-duration: 2s;
          animation-duration: 2s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
        .bar.delay1 {
          animation-delay: 1.4s;
          -webkit-animation-delay: 1.4s;
        }
        .bar.delay2 {
          animation-delay: 1.1s;
          -webkit-animation-delay: 1.1s;
        }
        .top {
          top: 0px;
          left: -5px;
        }
        .right {
          top: 18px;
          right: -23px;
          transform: rotate(90deg);
        }
        .bottom {
          bottom: 0px;
          left: -5px;
        }
        .left {
          top: 180px;
          left: -23px;
          transform: rotate(90deg);
        }
        @-webkit-keyframes h-move {
          0% {
            left: -50px;
          }
          100% {
            left: 100%;
          }
        }
        @keyframes h-move {
          0% {
            left: -50px;
          }
          100% {
            left: 100%;
          }
        }
        .top,
        .bottom {
          -webkit-animation-name: h-move;
          animation-name: h-move;
        }
        @-webkit-keyframes v-move {
          0% {
            top: -30px;
          }
          100% {
            top: 110%;
          }
        }
        @keyframes v-move {
          0% {
            top: -30px;
          }
          100% {
            top: 110%;
          }
        }
        .right,
        .left {
          -webkit-animation-name: v-move;
          animation-name: v-move;
        }
      `}</style>
      <style jsx>{`
        .table-head {
          overflow: hidden;
          position: relative;
          border: 0px;
          width: 100%;
        }
        .table-scroll {
          position: relative;
          overflow: auto;
          max-height: 300px;
          width: 100%;
        }
      `}</style>
    </motion.div>
  );
};

export default Candidates;
