import { useState, useCallback } from "react";
import { withAuth } from "../../hoc/withAuth";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import axios from "axios";
import cookie from "nookies";
import swal from "sweetalert";
import validator from "validator";
import DetailJob from "../../components/DetailJob/DetailJob";
import Candidates from "../../components/DetailJob/Candidates/Candidates";
import DataCandidates from "../../components/DetailJob/Candidates/DataCandidates";
import EmptyCandidate from "../../components/DetailJob/Candidates/EmptyCandidate";
import Profile from "../../components/DetailJob/Candidates/Profile";
import ScaleLoader from "../../components/Transition/Spinner/ScaleLoader";

const Detail = () => {
  const dispatch = useDispatch();
  const [linkApplicant, setLinkApplicant] = useState("");
  const [changeView, setChangeView] = useState(false);
  const [validLink, setValidLink] = useState(true);

  const loading = useSelector((state) => state.applicants.loading);
  const profile = useSelector((state) => state.applicants.getApplicant);
  const jobData = useSelector((state) => state.jobs.jobData);
  const applicants = useSelector((state) => state.jobs.jobData.applicants);
  const { id, image, title_job, company, location, posted, concepts, contents, keywords } = jobData;

  const onScrapingApplicants = useCallback(
    (url, jobId) => dispatch(actions.applicantScraping(url, jobId)),
    [dispatch]
  ); // Scraping
  const onGetApplicant = useCallback((id) => dispatch(actions.getApplicant(id)), [dispatch]); //View Profile
  const onDeleteApplicant = useCallback(
    (id_app, jobId) => dispatch(actions.deleteApplicant(id_app, jobId)),
    [dispatch]
  ); //Delete applicant
  const onQualifyApplicant = useCallback(
    (id_app, jobId) => dispatch(actions.qualifyApplicant(id_app, jobId)),
    [dispatch]
  ); //Delete applicant

  //Scraping
  const linkChangeHandler = (event) => {
    if (event.charCode === 32) {
      setValidLink(false);
      event.preventDefault();
      return false;
    } else {
      setLinkApplicant(event.target.value);
      setValidLink(true);
    }
  };
  const applicantScrapingHandler = (event) => {
    event.preventDefault();
    if (linkIsValid()) {
      let data = linkApplicant.split(" ").join("");
      data = linkApplicant.split("\n");
      onScrapingApplicants(data, id);
      setLinkApplicant("");
    }
  };
  //Scraping

  const linkIsValid = () => {
    const link = linkApplicant;
    let isGood = true;
    if (validator.isEmpty(link, { ignore_whitespace: true })) {
      isGood = false;
      swal({
        title: "Link can't be empty",
        icon: "warning",
        button: true,
        dangerMode: true,
      });
    }
    if (!isGood) {
      setLinkApplicant(link);
    }
    return isGood;
  };

  const changeViewHandler = useCallback(
    (id) => {
      setChangeView(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      onGetApplicant(id);
    },
    [changeView, onGetApplicant]
  );

  const viewCandidatesHandler = useCallback(() => {
    setChangeView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [changeView]);

  const deleteApplicantHandler = (id_app, jobId) => {
    onDeleteApplicant(id_app, jobId);
  };

  const qualifyHandler = useCallback(
    (id, jobId) => {
      onQualifyApplicant(id, jobId);
    },
    [onQualifyApplicant]
  );

  let dataCandidate = <EmptyCandidate />;
  if (applicants && applicants.length > 0) {
    const sortScore = applicants.slice(0);
    sortScore.sort((a, b) => {
      return b.score - a.score;
    });
    dataCandidate = sortScore.map((applicant, i) => (
      <DataCandidates
        key={i}
        no={+i}
        id={applicant.id}
        name={applicant.name}
        url={applicant.url}
        score={applicant.score}
        detailScore={applicant.detail_score}
        qualify={applicant.qualify}
        view={() => changeViewHandler(applicant.id)}
        deleteApplicant={() => deleteApplicantHandler(applicant.id, id)}
      />
    ));
  }

  let candidates = (
    <Candidates
      submit={applicantScrapingHandler}
      change={linkChangeHandler}
      value={linkApplicant}
      validLink={validLink}
      jobId={id}
    >
      {dataCandidate}
    </Candidates>
  );

  if (profile) {
    if (changeView) {
      candidates = (
        <Profile
          back={viewCandidatesHandler}
          id={profile.id}
          image={profile.image}
          name={profile.name}
          languages={profile.languages}
          current_job={profile.current_job}
          experiences={profile.experiences}
          educations={profile.educations}
          licenses={profile.licenses}
          skills={profile.skills}
          honors={profile.honors}
          qualify={profile.qualify}
          qualifyApplicant={() => qualifyHandler(profile.id, id)}
        />
      );
    }
  }

  let loadingScrape = null;
  if (loading) {
    loadingScrape = <ScaleLoader />;
  }

  return (
    <>
      {loadingScrape}
      <DetailJob
        jobId={id}
        image={image}
        title_job={title_job}
        company={company}
        location={location}
        posted={posted}
        contents={contents}
        concepts={concepts}
        keywords={keywords}
      >
        <div key={changeView}>{candidates}</div>
      </DetailJob>
    </>
  );
};

Detail.getInitialProps = async (ctx) => {
  try{
    const { jobId } = ctx.query;
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    let res = await axios.get(`http://backend:5000/job/${jobId}`, headerCfg);
    ctx.store.dispatch(actions.getJobSuccess(res.data));
  } catch (err) {
    console.log("error [jobId] => ", err.response)
  }
};

export default withAuth(Detail);
