import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import '....imports/ui/Test1.js'

import App from '../ui/App.jsx'
import VoteYouCan from '../ui/VoteYouCan'
import Home from '../ui/Home'
import Signup from '../ui/Signup'
import Login from '../ui/Login'


var SearchLayout = React.createClass({
  render: function() {
    return (
      <div>
          {this.props.children}
      </div>
      )
  }
})

export const renderRoutes = () => (
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route component={SearchLayout}>
        <Route path="home" component={Home} />
        <Route path="voteyoucan" component={VoteYouCan} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
      </Route>    
    </Route>
  </Router>

  );