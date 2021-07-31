import React from 'react';

import PNavbar from './components/pnavbar.js';
import './App.css';

class App extends React.Component {
  state = {
    name: "Pixisoft",
    languages: 'EN',
  };

  setLanguage = (id) => {
    switch (id) {
      case 0: this.setState({ languages: 'EN' }); break;
      case 1: this.setState({ languages: 'zh-TW' }); break;
    default:
      console.error('Invalid language code, ', id);
      break;
    }
  }

  render () {
    return (
      <React.Fragment>
        <PNavbar name={ this.state.name }
                 setLanguage={ this.setLanguage }/>
      </React.Fragment>
    );
  }
}

export default App;
