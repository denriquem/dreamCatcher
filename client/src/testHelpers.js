import React from "react";
import { shallow } from "enzyme";

export const setup = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

export const setupConnected = (Component) => {
  const wrapper = shallow(<Component />).dive();
  return wrapper;
};

export const findByTestAttr = (wrapper, attribute) => {
  return wrapper.find(`[data-test='${attribute}']`);
};
