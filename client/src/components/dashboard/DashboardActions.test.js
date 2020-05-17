import React from "react";
import DashboardActions from "./DashboardActions";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  wrapper = setup(DashboardActions);
});

describe("DashboardActions", () => {
  it("succesfully renders dashboard actions", () => {
    expect(wrapper).toHaveLength(1);
  });
});
