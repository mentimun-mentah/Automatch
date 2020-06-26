import {useState} from 'react'
import { withAuth } from "../../hoc/withAuth";
import * as actions from "../../store/actions";
import cookie from "nookies";
import axios from "axios";
import DashboardUser from "../../components/Profile/Dashboard";

const Dashboard = () => {
  return <DashboardUser />;
};
Dashboard.getInitialProps = async (ctx) => {
  try{
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    const res = await axios.get("http://backend:5000/user", headerCfg);
    ctx.store.dispatch(actions.getUserSuccess(res.data));
    const resdash = await axios.get("http://backend:5000/dashboard-user", headerCfg);
    ctx.store.dispatch(actions.getDashboardSuccess(resdash.data));
    const search = await axios.get("http://backend:5000/dashboard-user/jobs?page=&q=", headerCfg);
    ctx.store.dispatch(actions.searchJobSuccess(search.data));
  } catch (err) {
    console.log("dashboard catch => ", err.response)
  }
};

export default withAuth(Dashboard);
