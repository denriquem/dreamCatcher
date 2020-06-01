import { CommentForm } from "./CommentForm";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    addComment: jest.fn(),
  };

  wrapper = setup(CommentForm, props);
});

describe("CommentFrom", () => {
  it("should succesfully render the commnet form ", () => {
    expect(wrapper).toHaveLength(1);
  });
});
