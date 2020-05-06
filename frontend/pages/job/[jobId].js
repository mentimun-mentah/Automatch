import { useEffect } from "react";
import { withAuth } from "../../hoc/withAuth";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import axios from "../../store/axios-instance";
import cookie from "nookies";
import DetailJob from "../../components/DetailJob/DetailJob";

const Detail = ({ children }) => {
  const jobData = useSelector((state) => state.jobs.jobData);
  const {
    id,
    image,
    title_job,
    company,
    location,
    posted,
    concepts,
    contents,
    keywords,
    applicants,
  } = jobData;

  return (
    <DetailJob
      jobId={id}
      image={image}
      title_job={title_job}
      company={company}
      location={location}
      posted={posted}
      contents={contents}
      concepts={concepts}
      keywords={keywords}
    >
      {children}
    </DetailJob>
  );
};

Detail.getInitialProps = async (ctx) => {
  const { jobId } = ctx.query;
  const { access_token } = cookie.get(ctx);
  const headerCfg = {
    headers: { Authorization: `Bearer ${access_token}` },
  };

  let res = await axios.get(`/job/${jobId}`, headerCfg);
  ctx.store.dispatch(actions.getJobSuccess(res.data));
};

export default withAuth(Detail);
