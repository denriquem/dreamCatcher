import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    auth: { mockAuth: "mock" },
  };

  wrapper = setup(PrivateRoute, props);
});

describe("PrivateRoute", () => {
  it("succesfully render a private route", () => {
    expect(wrapper).toHaveLength(1);
  });
});
