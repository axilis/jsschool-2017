import React, { Component } from 'react';
import MovieComponent from './MovieComponent';
import LoginComponent from './LoginComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const NotFound = () => {
  return (
    <h1>This page is missing...</h1>
  );
}

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ MovieComponent }/>
            <Route exact path="/login" component={ LoginComponent }/>
            <Route path="*" component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
