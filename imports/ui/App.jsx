import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestArea from './TestArea'
import NavBar from './NavBar'
import RouterNodes from './RouterNodes'
import WrapperWithNavBar from './WrapperWithNavBar'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
class App extends Component {
    
  render() {
    return (
      <div>
      <WrapperWithNavBar >
        <div>
          Hello World
        </div>
      </WrapperWithNavBar>
      <br />
      <br />
      <br />
      <br />
      <div>Hello World</div>
        </div>
    );
  }
}
 
export default App
