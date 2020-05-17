import React from "react";
import { CreateProfile } from "./CreateProfile";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    createProfile: jest.fn(),
  };

  wrapper = setup(CreateProfile, props);
});

describe("CreateProfile", () => {
  it("succesfully renders the create profile component", () => {
    expect(wrapper).toHaveLength(1);
  });
});
