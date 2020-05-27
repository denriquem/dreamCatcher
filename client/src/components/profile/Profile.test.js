import { Profile } from "./Profile";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    getProfileByID: jest.fn(),
    profile: { state: "MockProfileState" },
    auth: { state: "MockAuthState" },
    match: { params: "ic" },
  };

  wrapper = setup(Profile, props);
});

describe("Profile", () => {
  it("should succesfully render a profile", () => {
    expect(wrapper).toHaveLength(1);
  });
});
