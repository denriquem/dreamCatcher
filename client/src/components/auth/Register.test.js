import React from "react";
import Enzyme from "enzyme";
import { Register } from "./Register";
import { findByTestAttr, setup } from "./../testHelpers";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  const props = {
    setAlert: jest.fn(),
    register: jest.fn(),
    isAuthenticated: true,
  };

  wrapper = setup(Register, props);
});

describe("Register", () => {
  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });

  // it("should render a sign up form", () => {
  //   wrapper.dive();
  //   const signUpForm = wrapper.find("div.form");
  //   expect(signUpForm).toHaveLength(1);
  // });

  // it("should render a submit button", () => {
  //   const submitButton = wrapper.find("input.btn btn-primary");
  //   expect(submitButton).toHaveLength(1);
  // });
});
