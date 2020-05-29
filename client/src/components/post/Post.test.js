import { Post } from "./Post";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    post: {
      post: "mockPost",
      loading: false,
      getPost: jest.fn(),
    },
  };

  wrapper = setup(Post, props);
});

describe("Post", () => {
  it("should succesfully renders a post", () => {
    expect(wrapper).toHaveLength(1);
  });
});
