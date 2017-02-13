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
export default class NavBar extends Component {

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      // checked: this.props.task.checked,
      // private: this.props.task.private,
    });

    return (
        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">About Us</NavItem>
        <NavItem eventKey={2} href="#">History</NavItem>
        <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Terms</MenuItem>
          <MenuItem eventKey={3.2}>Strengths</MenuItem>
          <MenuItem eventKey={3.3}>Areas of operations</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Contact Us</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Twitter Login</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );

  }
}
 
NavBar.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required


  // task: PropTypes.object.isRequired,
  // showPrivateButton: React.PropTypes.bool.isRequired,
};
