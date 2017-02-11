import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
class TestArea extends Component {
    
  render() {
    return (
      <div>
      	Is it Ok-5 ?
      </div>
    );
  }
}
 
export default TestArea
