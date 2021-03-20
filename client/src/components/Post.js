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
    console.log(res);
    this.setState({ post: res.data });
  }

  renderHTML() {
    return { __html: this.state.post.html };
  }

  render() {
    return (
      <div>
        <div
          className="one-post"
          dangerouslySetInnerHTML={this.renderHTML()}
        ></div>
        <img className="img-item" src={programming} alt="programming" />
      </div>
    );
  }
}

export default Post;
