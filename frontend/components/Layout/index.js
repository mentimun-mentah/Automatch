import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import * as actions from "../../store/actions";
import cron from "node-cron";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const refresh_token = useSelector((state) => state.auth.refresh_token);

  const task = cron.schedule("10 * * * * *", () => {
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
      {router.asPath === "/profile" ? null : <Header />}
      {children}
      {router.asPath === "/profile" ? null : <Footer />}
    </>
  );
};

export default Layout;
