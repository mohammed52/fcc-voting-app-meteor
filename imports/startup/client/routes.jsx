import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import '....imports/ui/Test1.js'

import AppContainer from '../../ui/containers/AppContainer.jsx'
import VoteYouCan from '../../ui/components/VoteYouCan'
import Home from '../../ui/components/Home'
import Signup from '../../ui/components/Signup'
import Login from '../../ui/components/Login'


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
    <Route path="/" component={AppContainer}>
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