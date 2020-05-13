import { useSelector } from "react-redux";
import { withAuth } from "../hoc/withAuth";
import * as actions from "../store/actions";
import axios from "../store/axios-instance";
import cookie from "nookies";
import ExportPdf from "../components/DetailJob/Candidates/export";

const pdf = () => {
  const jobData = useSelector((state) => state.jobs.jobData);
  const applicants = useSelector((state) => state.jobs.jobData.applicants);
  const username = useSelector((state) => state.auth.user.username);

  return (
    <section className="mt-3">
      <ExportPdf applicant={applicants} job={jobData} user={username} />
    </section>
  );
};

pdf.getInitialProps = async (ctx) => {
  const { jobId } = ctx.query;
  const { access_token } = cookie.get(ctx);
  const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };

  let res = await axios.get(`/job/${jobId}`, headerCfg);
  ctx.store.dispatch(actions.getJobSuccess(res.data));
};

export default withAuth(pdf);
