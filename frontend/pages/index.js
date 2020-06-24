import { useEffect } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import IndexHome from "../components/Home";
import * as actions from "../store/actions";

const Home = ({ name, fresh }) => {
  const dispatch = useDispatch();
  const Logout = () => dispatch(actions.logout());
  const cookies = parseCookies()

  useEffect(() => {
    if (cookies.onLogout) {
      Logout()
      destroyCookie(null, "onLogout");
      destroyCookie(null, "access_token");
      destroyCookie(null, "refresh_token");
    }
  }, [Logout]);

  useEffect(() => {
    if (fresh) {
      swal({
        icon: "success",
        title: `Welcome ${name}`,
        timer: 3000
      }).then(() => {
        destroyCookie(null, "name");
        destroyCookie(null, "fresh");
      });
    }
  }, [swal, name, fresh]);
  return <IndexHome />;
};

Home.getInitialProps = ctx => {
  const { name, fresh } = parseCookies(ctx);
  return { name, fresh };
};

export default Home;
