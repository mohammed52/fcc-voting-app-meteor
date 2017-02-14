import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestArea from './TestArea'
import NavBar from './NavBar'
import RouterNodes from './RouterNodes'
import WrapperWithNavBar from './WrapperWithNavBar'
import Footer from './Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
class App extends Component {
    
  render() {
    return (
      <div>
      <WrapperWithNavBar />
      {this.props.children}
      <div>Hello World</div>
      <Footer />
        </div>
    );
  }
}
 
export default App
