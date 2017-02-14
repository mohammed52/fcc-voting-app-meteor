import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import VoteYouCan from '../imports/ui/VoteYouCan.jsx'
import Home from '../imports/ui/Home.jsx'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

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
      </Route>    
    </Route>
  </Router>
      ),document.getElementById('render-target'));
});
