import { Profiles } from "./Profiles";
import { setup } from "./../testHelpers";

let wrapper;

const props = {
  getProfiles: jest.fn(),
  profile: {
    mockProfile: "profile profile",
    profiles: [
      { prof1: "mockProfile1" },
      { prof2: "mockProfile2" },
      { prof3: "mockProfile3" },
    ],
  },
};

describe("Profiles", () => {
  it("Succesfully renders profiles", () => {
    wrapper = setup(Profiles, props);
    expect(wrapper).toHaveLength(1);
  });
});
