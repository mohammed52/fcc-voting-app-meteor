import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var FontAwesome = require('react-fontawesome');


export default class Home extends Component {

  render() {
    return (
          <div className="container-fluid wrapper-home testbg-1 text-center">

          <div className="container-fluid home-title testbg-1">VoteYouCan</div>
          <div className="container-fluid home-description testbg-1">Create custom polls with live results</div>
			<br />
				<Button bsStyle="success">Sign Up-2</Button>
			<br />
				<i className="fa fa-arrow-down" />
			<br />


          </div>
    );
  }
}