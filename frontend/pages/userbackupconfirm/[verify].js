import { useEffect } from "react";
import Router from "next/router";
import axios from "../../store/axios-instance";

const verify = ({ verify }) => {
  const getConfirm = (v) => {
    axios
      .get(`/user-confirm/${v}`)
      .then((res) => {
        Router.replace("/");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    getConfirm(verify);
  }, [getConfirm]);
  return null;
};

verify.getInitialProps = (ctx) => {
  const { verify } = ctx.query;

  return { verify };
};

export default verify;
