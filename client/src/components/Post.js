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
    const res = await axios.get(
      `http://localhost:5000/posts/${this.props.match.params.id}`
    );
    this.setState({ post: res.data });
  }

  renderHTML() {
    return { __html: this.state.post.html };
  }

  renderPost() {
    return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
  }
  render() {
    return (
      <div>
        <div className="one-post">{this.renderPost()}</div>
        <img className="img-item" src={programming} alt="programming" />
      </div>
    );
  }
}

export default Post;
