import React from "react";
import { shallow } from "enzyme";
import Home from "./index";
import Pricing from "./Pricing";

describe("Component <Home />", () => {
  it("should have 1 Component pricing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Pricing)).toHaveLength(1);
  });
});
