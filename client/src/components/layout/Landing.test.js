import React from "react";
import Landing from "./Landing";
import Enzyme from "enzyme";
import { setup, findByTestAttr } from "./../../testHelpers";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let landingComponent;

beforeEach(() => {
  wrapper = setup(Landing);
});

describe("Landing", () => {
  it("should render without errors", () => {
    landingComponent = findByTestAttr(wrapper, "component-landing");
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
