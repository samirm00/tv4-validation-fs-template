import React from "react";
import axios from "axios";
import programming from "./img/programming.jpeg";

class Post extends React.Component {
  state = {
    post: {},
  };
  componentDidMount() {
    this.getPost();
  }
  async getPost() {
    const res = await axios.get(`/posts/${this.props.match.params.id}`);
    this.setState({ post: res.data });
  }

  render() {
    return (
      <div>
        <div
          className="one-post"
          dangerouslySetInnerHTML={this.state.post.html}
        ></div>
        <img className="img-item" src={programming} alt="programming" />
      </div>
    );
  }
}

export default Post;
