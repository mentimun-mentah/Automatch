import { Button, Accordion, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { LeftToRight } from "../../Transition";
import parse from "html-react-parser";
import ArrowCard from "./ArrowCard";

const Profile = React.memo(
  ({
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
    qualify,
    qualifyApplicant,
  }) => {
    const lc = licenses.split(",");
    const hr = honors.split(",");
    const sk = skills.split(",");
    let lg = languages.split(",");

    const CardExperience = experiences.map((data, i) => {
      return (
        <div className="row" key={i}>
          <ArrowCard />
          <div className="col py-2">
            <Accordion>
              <Card border="success" className="shadow">
                <Card.Body className="">
                  <h4 className="card-title text-success">
                    {data.company_name}
                  </h4>
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
          <ArrowCard />
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
          <ArrowCard />
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
            src={image ? image : null}
            className="img-thumbnail rounded-lg mx-auto d-block"
            width="110"
            alt="candidate"
          />
          <h5 className="mt-2 mb-1">{name}</h5>
          {lg.length > 0 && lg[0] !== "" && <span>{lg.join(" • ")}</span>}
          {current_job && <p className="mt-1">{current_job}</p>}
          <Button
            variant={qualify ? "success" : "outline-success"}
            className="badge-pill"
            onClick={qualifyApplicant}
          >
            <i className="far fa-check-circle"></i> Qualify
          </Button>
        </div>

        <div className="scrollable">
          {/* Experience */}
          {experiences.length > 0 && experiences[0] !== "" && (
            <div className="container py-2">
              <h3 className="font-weight-light text-muted py-3">Experience</h3>
              {CardExperience}
            </div>
          )}
          {/* Experience */}

          {/* Education */}
          {educations.length > 0 && educations[0] !== "" && (
            <div className="container py-2">
              <h3 className="font-weight-light text-muted py-3">Education</h3>
              {CardEducation}
            </div>
          )}
          {/* Education */}

          {/* Licenses */}
          {lc.length > 0 && lc[0] !== "" && (
            <div className="container py-2">
              <h3 className="font-weight-light text-muted py-3">
                Licenses & Certifications
              </h3>
              {CardLicenses}
            </div>
          )}
          {/* Licenses */}

          {/* Skills */}
          {sk.length > 0 && sk[0] !== "" && (
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
          )}
          {/* Skills */}

          {/* Honors & Awards */}
          {hr.length > 0 && hr[0] !== "" && (
            <div className="container py-2">
              <h3 className="font-weight-light text-muted py-3">
                Honors & Awards
              </h3>
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
          )}
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
  }
);

export default Profile;
