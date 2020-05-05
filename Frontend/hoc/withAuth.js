import { Component } from "react";
import cookies from "nookies";
import Router from "next/router";

const authenticate = (context) => {
  const { access_token } = cookies.get(context);

  // Checking if cookie is present
  // if it is not present, redirect user to signin page
  if (context.req && !access_token) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return;
  }

  if (!access_token) {
    Router.push("/");
  }

  return access_token;
};

const isAuth = (context) => {
  const { access_token } = cookies.get(context);
  return access_token;
};

const withAuth = (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(context) {
      const access_token = authenticate(context);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(context));

      return { ...componentProps, access_token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export { withAuth, isAuth };
