import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
class App extends Component {
    
  render() {
    return (
      <div>
      	<h1>HELLO WORLD-3</h1>
      	 <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}
 
export default App
