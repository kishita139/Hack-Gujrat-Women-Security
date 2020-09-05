import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Signup from "./components/Signup"; 
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feedback from "./components/Feedback";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
