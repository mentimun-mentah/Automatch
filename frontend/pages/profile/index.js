import { withAuth } from "../../hoc/withAuth";
import Router from "next/router";

const dashboardProfile = () => null;

dashboardProfile.getInitialProps = (ctx) => {
  if(process.browser){
    Router.replace("/profile/dashboard")
  }
  if(ctx.res){
    ctx.res.redirect(302, "/profile/dashboard")
    ctx.res.end()
  }
};

export default withAuth(dashboardProfile);
