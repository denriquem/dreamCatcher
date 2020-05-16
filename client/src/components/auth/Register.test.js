import React from "react";
import { Register } from "./Register";
import { shallow } from "enzyme";
import { findByTestAttr, setup } from "./../testHelpers";

let wrapper;

describe("Register", () => {
  beforeEach(() => {
    const props = {
      setAlert: jest.fn(),
      register: jest.fn(),
      isAuthenticated: true,
    };

    wrapper = setup(Register, props);
  });

  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });

  // it("should render a sign up form", () => {
  //   const signUpForm = wrapper.find("di");
  //   expect(signUpForm).toHaveLength(1);
  // });

  // it("should render a submit button", () => {
  //   const submitButton = wrapper.find("input.btn btn-primary");
  //   expect(submitButton).toHaveLength(1);
  // });
});
