import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import cookie from "nookies";
import Layout from "../components/Layout";
import Profile from "../components/Profile/Sidebar";
import withReduxStore from "../lib/with-redux-store";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../store/actions";

const App = ({ Component, pageProps, store }) => {
  const router = useRouter();
  let layout = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  if (router.pathname === "/profile/[user]" || router.pathname === "/profile/dashboard") {
    layout = (
      <Profile>
        <Component {...pageProps} />
      </Profile>
    );
  }
  return (
    <>
      <Head>
        <title>Automatch</title>
        <link rel="icon" href="/static/images/pricing-image/free.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.css" />
        <link rel="stylesheet" href="/static/css/utility.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/placeholder-loading/dist/css/placeholder-loading.min.css"
        />
      </Head>
      <Provider store={store}>{layout}</Provider>
      <style global jsx>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          padding: 60px 0px;
        }
        .hov_pointer {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const { access_token } = cookie.get(ctx);
  ctx.store.dispatch(actions.getUser(access_token));
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default withReduxStore(App);
