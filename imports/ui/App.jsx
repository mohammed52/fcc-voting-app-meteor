import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from './WrapperWithNavBar'
import Footer from './Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
class App extends Component {
    
  render() {
    return (
      <div className="testbg-1">
      <WrapperWithNavBar />
      {this.props.children}
      <br />
      <Footer />
        </div>
    );
  }
}
 
export default App
