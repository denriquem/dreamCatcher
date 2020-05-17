import React from "react";
import { EditProfile } from "./EditProfile";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    createProfile: jest.fn(),
    profile: { dummyProfile: "test " },
    getCurrentProfile: jest.fn(),
  };

  wrapper = setup(EditProfile, props);
});

describe("EditProfile", () => {
  it("succesfully renders the dit profile component", () => {
    expect(wrapper).toHaveLength(1);
  });
});
