import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.NavItem;
// var Nav = ReactBootstrap.Nav;

// Task component - represents a single todo item
export default class VoteYouCan extends Component {

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      // checked: this.props.task.checked,
      // private: this.props.task.private,
    });

    return (
          <div>VoteYouCan Page</div>
    );
  }
}
 
VoteYouCan.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required


  // task: PropTypes.object.isRequired,
  // showPrivateButton: React.PropTypes.bool.isRequired,
};
