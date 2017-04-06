import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {

  state = {
    loggedIn: false,
  };

  logIn = (password) => {
    fetch('/login', { 
      method: 'POST',
      body: `password=${password}`,
      credentials: 'include',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log("Login was successful!");

        // This will add state to nagivation, Redirect won't
        // this.props.history.push('/');
        this.setState({
          loggedIn: true
        })

      } else {
        console.error("Invalid credentials!");
      }
    });
  }

  render = () => {

    if (this.state.loggedIn) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div>
        <h1>Login screen</h1>
        <p><a onClick={ () => { this.logIn("tajna") } }>Log me in</a></p>
        <p><a onClick={ () => { this.logIn("invalid") } }>Do not log me in</a></p>
      </div>
    );
  }
}

export default LoginComponent;
