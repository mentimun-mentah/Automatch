import { withAuth } from "../../hoc/withAuth";
import * as actions from "../../store/actions";
import cookie from "nookies";
import axios from "../../store/axios-instance";
import DashboardUser from "../../components/Profile/Dashboard";

const Dashboard = () => {
  return <DashboardUser />;
};
Dashboard.getInitialProps = async (ctx) => {
  const { access_token } = cookie.get(ctx);
  const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
  const res = await axios.get("/user", headerCfg);
  ctx.store.dispatch(actions.getUserSuccess(res.data));
  const resdash = await axios.get("/dashboard-user", headerCfg);
  ctx.store.dispatch(actions.getDashboardSuccess(resdash.data));
  const search = await axios.get("/dashboard-user/jobs?page=&q=", headerCfg);
  ctx.store.dispatch(actions.searchJobSuccess(search.data));
};

export default withAuth(Dashboard);
