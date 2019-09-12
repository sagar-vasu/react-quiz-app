import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from '../container/login'
import Home from '../container/home'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
}