import { ProfileTop } from "./ProfileTop";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    profile: { profile1: "mockProfile", user: { name: "Simon Crabstick" } },
  };

  wrapper = setup(ProfileTop, props);
});

describe("ProfileTop", () => {
  it("should succesfully render the Profile Top", () => {
    expect(wrapper).toHaveLength(1);
  });
});
