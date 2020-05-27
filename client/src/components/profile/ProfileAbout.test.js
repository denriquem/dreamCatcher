import { ProfileAbout } from "./ProfileAbout";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    profile: {
      mock: "mocKPro",
      user: "Daniel",
      skills: ["crochetMaster", "squidObserver"],
    },
  };

  wrapper = setup(ProfileAbout, props);
});

describe("ProfileAbout", () => {
  it("should succesfully render the about profile section", () => {
    expect(wrapper).toHaveLength(1);
  });
});
