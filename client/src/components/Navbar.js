import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="flex-wrapper">
            <div className="brand">
              <Link to="/">
                <h1>My Blog</h1>
              </Link>
            </div>
            <div className="links">
              <Link to="/posts">Posts</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
