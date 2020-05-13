import { withAuth } from "../../hoc/withAuth";
import Router from "next/router";

const dashboardProfile = () => null;

dashboardProfile.getInitialProps = (ctx) => {
  process.browser
    ? Router.replace("/profile/dashboard")
    : ctx.res.redirect(302, "/profile/dashboard");
};

export default withAuth(dashboardProfile);
