import { useState, useEffect, useCallback } from "react";
import { Col, Card, Table, Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

import * as actions from "../../store/actions";
import JobsData from "./JobsData";

const AllJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.auth.jobs);
  const { data, iter_pages, next_num, page, prev_num } = jobs;
  const [enteredFilter, setEnteredFilter] = useState("");
  const [active, setActive] = useState(page);

  const onSearchJob = useCallback(
    (page, search) => dispatch(actions.searchJob(page, search)),
    [dispatch]
  ); // SEARCH JOBS

  useEffect(() => {
    onSearchJob(active, enteredFilter);
  }, [onSearchJob, active, enteredFilter]);

  const pageHandler = (event) => {
    setActive(+event.target.text);
  };
  const prevHandler = () => {
    setActive(prev_num);
  };
  const nextHandler = () => {
    setActive(next_num);
  };

  let pagination = [];
  for (let n = 1; n <= iter_pages.length; n++) {
    let click = pageHandler;
    if (n === +active) {
      click = null;
    }
    pagination.push(
      <Pagination.Item key={n} active={n === +active} text={+n} onClick={click}>
        {n}
      </Pagination.Item>
    );
  }

  let jobsData = null;
  if (data) {
    jobsData = data.map((job, i) => (
      <JobsData
        key={i}
        id={job.id}
        create={job.created_at}
        jobTitle={job.title_jobs}
        qualify={job.qualify_applicant}
        candidates={job.total_candidate}
      />
    ));
  }

  return (
    <Col>
      <Card>
        <Card.Header className="bg-white border-0 pb-0 pt-4">
          <form>
            <div className="form-row">
              <div className="col-9">
                <h4 className="card-title">All Jobs</h4>
              </div>
              <div className="col">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search job"
                    value={enteredFilter}
                    onChange={(event) => setEnteredFilter(event.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Card.Header>
        <Card.Body>
          <div className="table-scroll">
            <Table borderless>
              <AnimatePresence exitBeforeEnter>
                <tbody>{jobsData}</tbody>
              </AnimatePresence>
            </Table>
          </div>
          {iter_pages.length > 1 && (
            <Pagination>
              <Pagination.Prev
                onClick={prevHandler}
                disabled={prev_num === null}
              >
                Previous
              </Pagination.Prev>
              {pagination}
              <Pagination.Next
                onClick={nextHandler}
                disabled={next_num === null}
              >
                Next
              </Pagination.Next>
            </Pagination>
          )}
        </Card.Body>
      </Card>
      <style jsx>{`
        .table-scroll {
          position: relative;
          overflow: auto;
          height: 300px;
          max-height: 300px;
          width: 100%;
        }
      `}</style>
    </Col>
  );
};

export default AllJobs;
