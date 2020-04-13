import React from "react";
import Landing from "./Landing";
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe("Landing", () => {
  it("should render without errors", () => {
    const wrapper = setUp(Landing, {});
    expect(wrapper).toHaveLength(1);
  });
});
