import { ProfileItem } from "./ProfileItem";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    profile: {
      mockProfile: "colours",
      user: { id: "22", name: "johnson" },
      skills: ["why", "should", "I"],
    },
  };

  wrapper = setup(ProfileItem, props);
});

describe("ProfileItem", () => {
  it("succesfully render a profile Item", () => {
    expect(wrapper).toHaveLength(1);
  });
});
