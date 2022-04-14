import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          < Route path = "/Users/:id"
          render = {
            (props) => <Users {...props} greetingsMessage ="Good Morning" />
          }
          />
          <Route path="/About" component={About} />
          <Route
      path="/strict-access"
      render={ () => (
        <StrictAccess user={ { username: 'joao', password: '1234' } } />
      )}
    />
          <ul>
            <li><Link to="/Users">Users</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/StrictAccess">StrictAccess</Link></li>
          </ul>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
