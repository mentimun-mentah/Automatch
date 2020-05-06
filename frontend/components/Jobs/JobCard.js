import { motion } from "framer-motion";
import { Fade } from "../Transition";

import Link from "next/link";

const JobCard = ({ image, company, location, title_job, posted, jobId }) => {
  return (
    <motion.div
      className="col"
      initial="initial"
      animate="in"
      exit="out"
      variants={Fade}
    >
      <div className="card text-center rounded shadow mb-2 w-13rem">
        <div className="card-body">
          <img
            src={image}
            width="68"
            className="rounded mx-auto d-block mb-2"
            alt={company}
          />
          <p className="card-text font-weight-bold mb-0">
            <span className="mb-4">{company}</span>
          </p>
          <p className="card-text text-muted">
            <i className="far fa-map-marker-alt"></i> {location}
          </p>
          <hr />
          <p className="card-text font-weight-bold text-blue-dark">
            <span>{title_job}</span>
          </p>
          <p className="card-text text-muted">{posted}</p>
          <Link href="/job/[jobId]" as={`/job/${jobId}`}>
            <a className="btn btn-hover btn-seconddark rounded-pill">Process</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .btn-seconddark {
          border: 1px solid #173f53;
          color: #173f53;
        }
        .text-blue-dark {
          color: #173f53;
        }
        .btn-hover:hover {
          background-color: #0065ff;
          color: #ffffff !important;
        }
      `}</style>
    </motion.div>
  );
};

export default JobCard;
