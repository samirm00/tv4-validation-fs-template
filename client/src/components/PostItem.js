import React from "react";

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.pathname = `/posts/${this.props.post._id}`;
  }
  renderTags(tags) {
    return tags.map((tag) => {
      return <span key={tag}>{tag}</span>;
    });
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post-list-item">
        <button className="btn" onClick={this.onClick}>
          <h3 className="title">{post.title}</h3>
          <span className="date">{post.createdAt}</span>
          <div className="tags">{this.renderTags(post.tags)}</div>
        </button>
      </div>
    );
  }
}

export default PostItem;
