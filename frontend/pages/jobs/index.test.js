import React from "react";
import { shallow } from "enzyme";
import { JobsContainer } from "./index";
import EmptyCard from "../../components/Jobs/EmptyCard";
import JobCard from "../../components/Jobs/JobCard";

describe("<Jobs />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<JobsContainer />);
  });

  it("should render <EmptyCard /> if job is empty", () => {});

  it("should render <JobCard /> when user has job", () => {});
});
