import { useState, useCallback } from "react";
import { withAuth } from "../../hoc/withAuth";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import Router from "next/router";
import swal from "sweetalert";
import validator from "validator";
import Jobs from "../../components/Jobs/Job";
import EmptyCard from "../../components/Jobs/EmptyCard";
import JobCard from "../../components/Jobs/JobCard";
import ScaleLoader from "../../components/Transition/Spinner/ScaleLoader";

const linkJob = {
  link: { value: "", isValid: true, message: "" },
};

export const JobsContainer = () => {
  const dispatch = useDispatch();
  const [linkjob, setLinkjob] = useState(linkJob);

  const jobs = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.jobs.loading);

  const onJobScraping = useCallback(
    (url_job) => dispatch(actions.jobScraping(url_job)),
    [dispatch]
  );

  const submitHandler = (event) => {
    event.preventDefault();
    resetValidation();
    if (linkIsValid() && linkjob.link.value !== "") {
      onJobScraping(linkjob.link.value);
      clearLinkjobHandler();
    }
  };

  const linkChangeHandler = (event) => {
    const data = {
      ...linkjob,
      link: { value: event.target.value, isValid: true, message: "" },
    };
    setLinkjob(data);
  };

  const clearLinkjobHandler = useCallback(() => {
    const data = {
      ...linkjob,
      link: { value: "", isValid: true, message: "" },
    };
    setLinkjob(data);
  }, [linkjob]);

  const linkIsValid = () => {
    const link = { ...linkjob.link };
    let isGood = true;

    if (validator.isEmpty(link.value)) {
      link.isValid = false;
      link.message = "";
      link.isGood = false;
      swal({
        title: "Upss not found!",
        text:
          "You can click button register it to make your job portal available.",
        icon: "warning",
        buttons: ["Cancel", "Register it"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) Router.push("/job-portal", "/job-portal");
      });
    }
    if (!isGood) {
      setLinkjob(link);
    }
    return isGood;
  };

  const resetValidation = () => {
    const state = JSON.parse(JSON.stringify(linkjob));
    for (let key in state) {
      if (state[key].hasOwnProperty("isValid")) {
        (state[key].isValid = true), (state[key].message = "");
      }
    }
    setLinkjob(state);
  };

  let jobCard = <EmptyCard />;
  if (jobs !== null && jobs.jobs !== undefined && jobs.jobs.length > 0) {
    jobCard = (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-5">
        {jobs.jobs.map((job, i) => {
          const { id, image, company, location, title_job, posted } = job;
          return (
            <JobCard
              key={i}
              jobId={id}
              image={image}
              company={company}
              location={location}
              title_job={title_job}
              posted={posted}
            />
          );
        })}
      </div>
    );
  }

  let submitLink = null;
  if (loading) {
    submitLink = <ScaleLoader />;
  }

  return (
    <>
      {submitLink}
      <Jobs
        change={linkChangeHandler}
        submit={submitHandler}
        value={linkjob.link.value}
        clearLink={clearLinkjobHandler}
      >
        {jobCard}
      </Jobs>
    </>
  );
};

export default withAuth(JobsContainer);
