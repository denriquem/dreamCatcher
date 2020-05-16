import React from "react";
import { Dashboard } from "./Dashboard";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  const props = {
    dispatch: jest.fn(),
    getCurrentProfile: jest.fn(),
    auth: { user: "Daniel" },
    profile: { bla: "yes", bla: "yes" },
  };

  wrapper = shallow(<Dashboard {...props} />);
});

describe("Dashboard ", () => {
  it("renders the dashboard without errors", () => {
    expect(wrapper).toHaveLength(1);
  });
});
