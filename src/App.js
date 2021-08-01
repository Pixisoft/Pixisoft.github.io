import React from 'react';
import PNavbar from './components/PNavbar.js';
import PFooter from './components/PFooter.js';

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

  render () {
    return (
      <React.Fragment>
        <PNavbar state={ this.state }
                 setLanguage={ this.setLanguage }
                 getContext={ this.getContext }/>
        <PFooter/>
      </React.Fragment>
    );
  }

  /**
   * Update the current language.
   * @param { string } lan - Language name we use as id in json data.
   */
  setLanguage = (lan) => {
    this.setState({ language: lan });
    this.setState({ language_id: this.state.data.SupportLanguages.indexOf(lan) });
    this.updateTitle();
  }

  /**
   * You pass in the target key for translation.
   * @param { string } lan - Language name we use as id in json data.
   */
  getContext = (key) => {
    return this.state.data[key][this.state.language_id];
  }

  /**
   * Update title with corresponding language.
   */
  updateTitle() {
    document.title = this.getContext('Name') + ' - ' + this.getContext('Title');
  }
}

export default App;
