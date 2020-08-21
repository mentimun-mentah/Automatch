import { useSelector } from "react-redux";
import { withAuth } from "../hoc/withAuth";
import * as actions from "../store/actions";
import axios from "axios";
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
  try{
  const { jobId } = ctx.query;
  const { access_token } = cookie.get(ctx);
  const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
  let res = await axios.get(`http://backend:5000/job/${jobId}`, headerCfg);
  ctx.store.dispatch(actions.getJobSuccess(res.data));
  let resUser = await axios.get(`http://backend:5000/user`, headerCfg);
  ctx.store.dispatch(actions.getUserSuccess(resUser.data));
  } catch (err) {
    console.log("export catch => ", err.response)
  }
};

export default withAuth(pdf);
