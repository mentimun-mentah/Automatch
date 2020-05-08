import axios from "../../store/axios-instance";

const verify = ({ verify }) => {
  return (
    <section>
      <h1>thank you {verify}</h1>
    </section>
  );
};

verify.getInitialProps = (ctx) => {
  const { verify } = ctx.query;
  axios
    .get(`/user-confirm/${verify}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });

  return { verify };
};

export default verify;
