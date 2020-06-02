import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

export const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Fragment>
      <h1 className="large text-primary text-center">
        DreamFeed
        <p className="lead">
          <i className="fas fa-user"></i> Welcome to the community
        </p>
        <PostForm />
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={posts._id} post={post} />
          ))}
        </div>
      </h1>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
