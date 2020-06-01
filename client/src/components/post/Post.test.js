import { Post } from "./Post";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    post: {
      getPost: jest.fn(),
      post: { text: "mockPost", comments: ["heres one", "heres another"] },
      loading: false,
    },
  };

  wrapper = setup(Post, props);
});

describe("Post", () => {
  it("should succesfully renders a post", () => {
    expect(wrapper).toHaveLength(1);
  });
});
