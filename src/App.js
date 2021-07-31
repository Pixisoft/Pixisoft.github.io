import React from 'react';

import PNavbar from './components/pnavbar.js';
import data from './data/languages.json';
import './App.css';

class App extends React.Component {
  state = {
    language: 'English',   /* Current language */
    language_id: 0,        /* Current language's identity */
    data: undefined,       /* translation data */
  };

  constructor(props) {
    super(props);
    this.state.data = data;
    this.setLanguage(this.state.language);  // set up language for initialization
  }

  updateTitle() {
    document.title = this.getContext('Name') + ' - ' + this.getContext('Title');
  }

  setLanguage = (lan) => {
    this.setState({ language: lan });
    this.setState({ language_id: this.state.data.SupportLanguages.indexOf(lan) });
    this.updateTitle();
  }

  getContext = (key) => {
    return this.state.data[key][this.state.language_id];
  }

  render () {
    return (
      <React.Fragment>
        <PNavbar state={ this.state }
                 setLanguage={ this.setLanguage }
                 getContext={ this.getContext }/>
      </React.Fragment>
    );
  }
}

export default App;
