import Router from "next/router";
import cookies from "nookies";

const logout = () => null;

logout.getInitialProps = (ctx = {}) => {
  cookies.destroy(ctx, "access_token");
  cookies.destroy(ctx, "refresh_token");

  if (ctx.req) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }
  if (process.browser) {
    Router.replace("/");
  }
};

export default logout;
