import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="well">
      <br/>
      <div className="container-fluid">
      <p className="signature">Learned &amp; Coded by <a href="http://codepen.io/mohammed5253/" target="_blank" className="signature-link">Mohammed A. Petiwala</a> (without peeking!)</p>
      </div>
      <div className="container-fluid">
      <p className="signature">
      Originally Designed &amp; Coded by <a href="https://fcc-voting-arthow4n.herokuapp.com/polls" target="_blank" className="signature-link">
        Free Code Camp</a>
      </p>
      </div>
      </div>
    );
  }
}

export default Footer;