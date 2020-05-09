import { useEffect } from "react";
import { isAuth } from "../../hoc/withAuth";
import { Row, Col, Badge, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "../Transition";

import * as actions from "../../store/actions";
import BadgePlaceholder from "../Transition/Spinner/BadgePlaceholder";
import parse from "html-react-parser";

const DetailJob = ({
  jobId,
  image,
  title_job,
  company,
  location,
  posted,
  contents,
  concepts,
  keywords,
  access_token,
  children,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.jobs.loading);

  const onGetCk = (jobId, access_token) =>
    dispatch(actions.getCk(jobId, access_token));

  const onDeleteJob = (jobId) => dispatch(actions.deleteJob(jobId));

  useEffect(() => {
    if (concepts === null || keywords === null) {
      onGetCk(jobId, isAuth());
    }
  }, []);

  const renderConcepts = () => {
    if (concepts !== null) {
      const cl = concepts.split(",");
      return cl.map((concept, i) => {
        return (
          <Badge pill variant="secondary" className="bmd" key={i}>
            {concept}
          </Badge>
        );
      });
    }
  };

  const renderKeywords = () => {
    if (keywords !== null) {
      const kl = keywords.split(",");
      return kl.map((keyword, i) => {
        return (
          <Badge pill variant="dark" className="bmd" key={i}>
            {keyword}
          </Badge>
        );
      });
    }
  };

  let badgeLoading = null;
  if (loading) {
    badgeLoading = <BadgePlaceholder />;
  }

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <section className="container mt-5">
        <Row>
          <Col lg={6}>
            <div className="text-center">
              <Image src={image} thumbnail />
              <h5 className="mt-2 mb-1">{title_job}</h5>
              <span>{company}</span> • <span>{location} </span>
              <p className="mt-1">
                <i className="far fa-clock mr-2"></i>
                {posted}
              </p>
              <button
                type="button"
                className="btn btn-outline-danger badge-pill"
                onClick={() => onDeleteJob(jobId)}
              >
                <i className="fal fa-times-circle mr-1"></i>Delete job
              </button>
            </div>
            {/*<div className="job-content mt-4">{parse(contents)}</div>*/}
            <h5 className="mt-4">Concepts</h5>
            {badgeLoading}
            {renderConcepts()}

            <h5 className="mt-4">Keywords</h5>
            {badgeLoading}
            {renderKeywords()}
          </Col>
          <Col lg={6}>
            <AnimatePresence exitBeforeEnter initial={false}>
              {children}
            </AnimatePresence>
          </Col>
        </Row>
      </section>
      <style jsx>{`
        .job-content {
          height: 400px;
          overflow-y: scroll;
        }
        .ph-item {
          direction: ltr;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          overflow: hidden;
          margin-bottom: 0px;
          background-color: #fff;
          border: 0px solid;
        }
        .ph-item > * {
          padding-left: 10px;
        }
        .ph-row div {
          height: 20px;
          margin-bottom: 5px;
          border-radius: 20px;
        }
        :global(.bmd) {
          padding: 0.4em 0.6em !important;
          font-size: 80% !important;
          margin-left: 0.5rem !important;
          font-weight: 400 !important;
        }
      `}</style>
    </motion.div>
  );
};
export default DetailJob;
