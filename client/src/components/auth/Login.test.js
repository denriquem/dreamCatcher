import React from "react";
import { Login } from "./Login";
import { setup, findByTestAttr } from "./../testHelpers";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

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

  //   it("should contain a log in form", () => {
  //     const loginForm = findByTestAttr(wrapper, "login-form");
  //     expect(loginForm).toHaveLength(1);
  //   });

  //   it("should contain a submit button", () => {
  //     const submitButton = findByTestAttr(wrapper, "submit-button");
  //     expect(submitButton).toHaveLength(1);
  //   });
});
