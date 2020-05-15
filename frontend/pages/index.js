import { useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import swal from "sweetalert";
import IndexHome from "../components/Home";

const Home = ({ name, fresh }) => {
  useEffect(() => {
    if (fresh) {
      swal({
        icon: "success",
        title: `Welcome ${name}`,
        timer: 3000,
      }).then(() => {
        destroyCookie(null, "name");
        destroyCookie(null, "fresh");
      });
    }
  }, [swal, name, fresh]);
  return <IndexHome />;
};

Home.getInitialProps = (ctx) => {
  const { name, fresh } = parseCookies(ctx);
  return { name, fresh };
};

export default Home;
