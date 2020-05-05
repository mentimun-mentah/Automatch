import * as actions from "../../store/actions";
import DetailJob from "../../components/DetailJob/DetailJob";
const Detail = () => {
  return <DetailJob />;
};

Detail.getInitialProps = (ctx) => {
  const { jobId } = ctx.query;
  console.log(jobId);
};

export default Detail;
