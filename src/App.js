import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function tick() {
  const element = (
    <div>
      <h1>Hello, fluckers! How did you get in?</h1>
      <h2>It is {new Date().toLocaleTimeString()}. That's all I know</h2>
    </div>
  );
return element
}

class App extends Component {
  render() {
    return ( tick()    );
  }
}

export default withAuthenticator(App, true);
