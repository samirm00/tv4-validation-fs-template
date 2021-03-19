import React from "react";
import developer from "./img/developer.jpeg";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome to My Blog</h2>
        <p>
          Welcome to my Blog, I am Samir and I am a junior full-Stack developer,
          I love coding in general<br></br>I code with two main programing
          languages Python and JavaScript
        </p>
        <img src={developer} alt="developer" />
      </div>
    );
  }
}

export default Home;
