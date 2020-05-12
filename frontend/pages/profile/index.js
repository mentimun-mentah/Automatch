import Router from "next/router";

const dashboardProfile = () => null;

dashboardProfile.getInitialProps = (ctx) => {
  process.browser
    ? Router.replace("/profile/dashboard")
    : ctx.res.replace(302, "/profile/dashboard");
  ctx.res.end();
};

export default dashboardProfile;
