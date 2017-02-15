import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import NavBar from './NavBar'
import { LinkContainer } from 'react-router-bootstrap';

var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.NavItem;
var Button = ReactBootstrap.Button;
// var Nav = ReactBootstrap.Nav;

// Task component - represents a single todo item
export default class WrapperWithNavBar extends Component {

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

        <LinkContainer to="/voteyoucan">
    <Button>VoteYouCan</Button>
  </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/home">
    <NavItem eventKey={1}>Home</NavItem>
  </LinkContainer>
  <LinkContainer to="/voteyoucan">
    <NavItem eventKey={1}>VoteYouCan</NavItem>
  </LinkContainer>
  <LinkContainer to="/testarea">
    <NavItem eventKey={1}>Test Area</NavItem>
  </LinkContainer>

      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/home"><a href="/home">VoteYouCan</a></NavItem>
        <NavItem eventKey={2} href="/home">Login</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );

  }
}
 
WrapperWithNavBar.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required


  // task: PropTypes.object.isRequired,
  // showPrivateButton: React.PropTypes.bool.isRequired,
};
