import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App';
import VoteYouCan from '../imports/ui/VoteYouCan'
import Home from '../imports/ui/Home'
import Signup from '../imports/ui/Signup'
import Login from '../imports/ui/Login'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../resources/font-awesome-4.7.0/css/font-awesome.min.css'

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div>
          {this.props.children}
      </div>
      )
  }
})

Meteor.startup(() => {
  render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    
      <Route component={SearchLayout}>
        <Route path="home" component={Home} />
        <Route path="voteyoucan" component={VoteYouCan} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
      </Route>    
    </Route>
  </Router>
      ),document.getElementById('render-target'));
});
