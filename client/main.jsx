import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import WrapperWithNavBar from './WrapperWithNavBar'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
})

var Home = React.createClass({
  render: function() {
    return (<h1>Home Page</h1>)
  }
})

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
      )
  }
})

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
      )
  }
})

var WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
})

Meteor.startup(() => {
  render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    
    </Route>
  </Router>
      ),document.getElementById('render-target'));
});
