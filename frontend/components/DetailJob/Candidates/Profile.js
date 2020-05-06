import { Button, Accordion, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { LeftToRight } from "../../Transition";
import parse from "html-react-parser";

const Profile = ({
  back,
  image,
  name,
  languages,
  current_job,
  experiences,
  educations,
  licenses,
  skills,
  honors,
}) => {
  const lc = licenses.split(",");
  const hr = honors.split(",");
  const sk = skills.split(",");
  const lg = languages.split(",");

  const CardExperience = experiences.map((data, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-auto text-center flex-column d-none d-sm-flex">
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
          <h5 className="m-2">
            <span className="badge badge-pill">
              <i className="far fa-arrow-alt-circle-right fa-lg"></i>
            </span>
          </h5>
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
        </div>
        <div className="col py-2">
          <Accordion>
            <Card border="success" className="shadow">
              <Card.Body className="">
                <h4 className="card-title text-success">{data.company_name}</h4>
                <p className="card-text">{data.job}</p>
                {data.detail && (
                  <>
                    <Accordion.Toggle
                      as={Button}
                      variant="outline-secondary"
                      size="sm"
                      eventKey={i}
                    >
                      Show Details ▼
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i}>
                      <div className="p-2 border">{parse(data.detail)}</div>
                    </Accordion.Collapse>
                  </>
                )}
              </Card.Body>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  });

  const CardEducation = educations.map((data, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-auto text-center flex-column d-none d-sm-flex">
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
          <h5 className="m-2">
            <span className="badge badge-pill">
              <i className="far fa-arrow-alt-circle-right fa-lg"></i>
            </span>
          </h5>
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
        </div>
        <div className="col py-2">
          <div className="card border-danger shadow">
            <div className="card-body">
              <h4 className="card-title text-danger">{data.school_name}</h4>
              <p className="card-text">{data.study}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const CardLicenses = lc.map((data, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-auto text-center flex-column d-none d-sm-flex">
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
          <h5 className="m-2">
            <span className="badge badge-pill">
              <i className="far fa-arrow-alt-circle-right fa-lg"></i>
            </span>
          </h5>
          <div className="row h-50">
            <div className="col border-right">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
        </div>
        <div className="col py-2">
          <div className="card border-info shadow">
            <div className="card-body">
              <p className="card-text">{data}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={LeftToRight}
    >
      <div className="job-header text-center">
        <img
          src={image}
          className="img-thumbnail rounded-lg mx-auto d-block"
          width="110"
          alt="candidate"
        />
        <h5 className="mt-2 mb-1">{name}</h5>

        {lg.map((lang, i) => {
          return <span key={i}>{lang} • </span>;
        })}
        <p className="mt-1">{current_job}</p>
      </div>

      <div className="scrollable">
        {/* Experience */}
        <div className="container py-2">
          <h3 className="font-weight-light text-muted py-3">Experience</h3>
          {CardExperience}
        </div>
        {/* Experience */}

        {/* Education */}
        <div className="container py-2">
          <h3 className="font-weight-light text-muted py-3">Education</h3>
          {CardEducation}
        </div>
        {/* Education */}

        {/* Licenses */}
        <div className="container py-2">
          <h3 className="font-weight-light text-muted py-3">
            Licenses & Certifications
          </h3>
          {CardLicenses}
        </div>
        {/* Licenses */}

        {/* Skills */}
        <div className="container py-2">
          <h3 className="font-weight-light text-muted py-3">Skills</h3>
          {sk.map((skill) => {
            return (
              <span
                className="badge badge-modify badge-pill badge-light font-weight-normal ml-2"
                key={skill}
              >
                {skill}
              </span>
            );
          })}
        </div>
        {/* Skills */}

        {/* Honors & Awards */}
        <div className="container py-2">
          <h3 className="font-weight-light text-muted py-3">Honors & Awards</h3>
          <ul className="list-group list-group-flush">
            {hr.map((prestasi) => {
              return (
                <li className="list-group-item" key={prestasi}>
                  {prestasi}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Honors & Awards */}
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary mt-5"
        onClick={back}
      >
        <i className="fas fa-arrow-left mr-2"></i>Go back
      </button>
      <style jsx>{`
        .scrollable {
          position: relative;
          overflow: auto;
          max-height: 650px;
        }
      `}</style>
    </motion.div>
  );
};

export default Profile;
