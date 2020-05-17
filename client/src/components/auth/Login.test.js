import React from "react";
import { Login } from "./Login";
import { setup, findByTestAttr } from "./../testHelpers";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  const props = {
    login: jest.fn(),
    isAuthenticated: true,
  };

  wrapper = setup(Login, props);
});

describe("Login", () => {
  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });

  // it("should contain a log in form", () => {
  //   const loginForm = findByTestAttr(wrapper, "login-form");
  //   expect(loginForm).toHaveLength(1);
  // });

  //   it("should contain a submit button", () => {
  //     const submitButton = findByTestAttr(wrapper, "submit-button");
  //     expect(submitButton).toHaveLength(1);
  //   });
});
