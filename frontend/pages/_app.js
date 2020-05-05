import { Provider } from "react-redux";
import Head from "next/head";
import Layout from "../components/Layout";
import withReduxStore from "../lib/with-redux-store";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../store/actions";

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Head>
        <title>Automatch</title>
        <link rel="icon" href="/static/images/pricing-image/free.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.css" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
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
  ctx.store.dispatch(actions.getUser());
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withReduxStore(App);
