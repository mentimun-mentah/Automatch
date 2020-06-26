import { motion } from "framer-motion";
import { Fade } from "../Transition";
import Link from "next/link";

const JobsData = ({ id, create, jobTitle, qualify, candidates }) => {
  return (
    <motion.tr
      className="border-bottom"
      initial="initial"
      animate="in"
      exit="out"
      variants={Fade}
      key={id}
    >
      <td>{jobTitle}</td>
      <td className="text-muted">{create}</td>
      <td className="text-muted">Total candidate: {candidates}</td>
      <td className="text-muted">Qualified applicant: {qualify}</td>
      <td>
        <a href={`/job/${id}`}>
          <button className="btn btn-outline-info btn-sm">See Details</button>
        </a>
      </td>
    </motion.tr>
  );
};

export default JobsData;
