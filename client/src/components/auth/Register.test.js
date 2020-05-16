import React from "react";
import { Register } from "./Register";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    setAlert: jest.fn(),
    register: jest.fn(),
    isAuthenticated: true,
  };

  wrapper = shallow(<Register {...props} />);
});

describe("Register", () => {
  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a sign up form", () => {
    const signUpForm = findByTestAttr(wrapper, "signUp-form");
    expect(signUpForm).toHaveLength(1);
  });

  // it("should render a submit button", () => {
  //   const submitButton = findByTestAttr(wrapper, "submit-button");
  //   expect(submitButton).toHaveLength(1);
  // });
});
