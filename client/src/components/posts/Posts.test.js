import React from "react";
import { Posts } from "./Posts";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    getPosts: jest.fn(),
    post: {
      mockObject: "mock",
      posts: ["I have lots of dreams to share", "I cannae dream"],
    },
  };

  wrapper = setup(Posts, props);
});

describe("Posts", () => {
  it("should render a posts page", () => {
    expect(wrapper).toHaveLength(1);
  });
});
