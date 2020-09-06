import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Feedback from './components/Feedback';
import { UserContext } from './contexts';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // console.log('useEffect running');
    if (localStorage.getItem('user')) {
      // console.log('user in ls');
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/" component={Home} exact />
          <Route path="*" component={Home} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
