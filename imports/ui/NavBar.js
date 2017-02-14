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
export default function NavBar () {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">VoteYouCan</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Sign Up</NavItem>
        <NavItem eventKey={2} href="#">Login</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
}