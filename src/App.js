import React from 'react';
import ReactDOM from 'react-dom';

import _NavBar from './components/_navbar.js';
import './App.css';

class App extends React.Component {
  state = {
    name: "Pixisoft",
  };

  render () {
    return (
      <React.Fragment>
        <_NavBar name={ this.state.name}/>
      </React.Fragment>
    );
  }
}

export default App;
