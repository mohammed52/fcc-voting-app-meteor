import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Link } from 'react-router'

// App component - represents the whole app
class RouterNodes extends Component {
    
  render() {
    return (
        <Router>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home} />
          <Route component={SearchLayout}>
            <Route path="users" component={UserList} />
            <Route path="widgets" component={WidgetList} />
          </Route> 
        </Route>
      </Router>
    );
  }
}
 
export default RouterNodes
