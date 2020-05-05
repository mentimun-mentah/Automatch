import { Row, Col, Badge } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "../Transition";

const DetailJob = ({ children }) => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
      <section className="container mt-5">
        <Row>
          <Col lg={6}>
            <div className="text-center">
              <img
                src="image"
                alt="company"
                className="img-thumbnail rounded-lg mx-auto d-block"
              />
              <h5 className="mt-2 mb-1">"title_job"</h5>
              <span>company</span> • <span>location</span>
              <p className="mt-1">
                <i className="far fa-clock mr-2"></i>
                posted
              </p>
              <button
                type="button"
                className="btn btn-outline-danger badge-pill"
              >
                <i className="fal fa-times-circle mr-1"></i>Delete job
              </button>
            </div>
            {/*
                onClick="deleteJob"
            <div className="job-content mt-4">{parse(contents)}</div>
            <div
              className="job-content mt-4"
              dangerouslySetInnerHTML={{ __html: this.props.jobs.desc }}
            />
            */}
            <h5 className="mt-4">Concepts</h5>
            <h5 className="mt-4">Keywords</h5>
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
