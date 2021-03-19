import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts" component={PostList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
