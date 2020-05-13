import { withAuth } from "../../hoc/withAuth";
import { useSelector } from "react-redux";
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
};

export default withAuth(Dashboard);
