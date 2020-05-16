import React from "react";
import { Landing } from "./Landing";
import Enzyme, { shallow } from "enzyme";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;
let landingComponent;

beforeEach(() => {
  wrapper = setup(Landing);
});

describe("Landing", () => {
  it("should render without errors", () => {
    landingComponent = findByTestAttr(wrapper, "component-landing");
    expect(landingComponent).toHaveLength(1);
  });

  it("should render a register and login buttons", () => {
    const registerButton = wrapper.find("div.buttons");
    expect(registerButton).toHaveLength(1);
  });
});
