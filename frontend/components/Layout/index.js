import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import cron from "node-cron";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const refresh_token = useSelector((state) => state.auth.refresh_token);

  const task = cron.schedule("*/13 * * * *", () => {
    dispatch(actions.refreshToken(refresh_token));
  });
  if (refresh_token === undefined) {
    task.destroy();
  }
  if (refresh_token) {
    task.start();
  }

  const onTryAutoSignin = useCallback(
    () => dispatch(actions.authCheckState()),
    [dispatch]
  );

  useEffect(() => {
    onTryAutoSignin();
  }, [onTryAutoSignin]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
