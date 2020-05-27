import { PostForm } from "./PostForm";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    addPost: jest.fn(),
  };

  wrapper = setup(PostForm, props);
});

describe("PostForm", () => {
  it("should succesfully render a post form", () => {
    expect(wrapper).toHaveLength(1);
  });
});
