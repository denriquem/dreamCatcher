import React from "react";
import { PostItem } from "./PostItem";
import { setup, findByTestAttr } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  const props = {
    post: {
      mockPost: "post",
      likes: ["oneLike", "twoLikes", "threeLikes"],
      comments: ["this is great!", "this is terrible"],
    },
    auth: { mockAuth: true, user: "Daniel" },
    addLike: jest.fn(),
    removeLike: jest.fn(),
    deletePost: jest.fn(),
  };

  wrapper = setup(PostItem, props);
});

describe("PostItem", () => {
  it("should succesfully render", () => {
    expect(wrapper).toHaveLength(1);
  });
});
