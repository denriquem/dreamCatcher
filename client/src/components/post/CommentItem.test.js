import { CommentItem } from "./CommentItem";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    postId: 74,
    comment: { comment1: "mock mock bla bla" },
    auth: { authState: "authStateMoc", user: "Daniel" },
    deleteComment: jest.fn(),
  };

  wrapper = setup(CommentItem, props);
});

describe("CommentItem", () => {
  it("should render the comment item", () => {
    expect(wrapper).toHaveLength(1);
  });
});
