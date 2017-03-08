import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from './WrapperWithNavBar'
import Footer from './Footer'
import AccountsUIWrapper from './AccountsUIWrapper.jsx'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Polls } from '../api/polls.js'

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
      <AccountsUIWrapper />
      <Footer />
        </div>
    );
  }
}
 
App.propTypes = {
  polls: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    polls: Polls.find({}).fetch(),
  };
}, App);

