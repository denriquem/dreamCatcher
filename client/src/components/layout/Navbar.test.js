import React from "react";
import { Navbar } from "./Navbar";
import Enzyme from "enzyme";
import { setup, findByTestAttr } from "./../testHelpers";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  const props = {
    logout: jest.fn(),
    auth: { test: "object" },
  };

  wrapper = setup(Navbar, props);
});

describe("Navbar", () => {
  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render a register button", () => {
    const registerButton = findByTestAttr(wrapper, "register-button");
    expect(registerButton).toHaveLength(1);
  });

  it("should render a login button", () => {
    const loginButton = findByTestAttr(wrapper, "login-button");
    expect(loginButton).toHaveLength(1);
  });
});
