import React from "react";
import axios from "axios";
import PostItem from "./PostItem";

class PostList extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.getPosts();
  }
  async getPosts() {
    const res = await axios.get("/posts/");
    this.setState({ posts: res.data });
  }

  renderPosts() {
    return this.state.posts.map((post) => {
      return <PostItem post={post} key={post._id} />;
    });
  }
  render() {
    return (
      <div className="container">
        <div className="post-list">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default PostList;
