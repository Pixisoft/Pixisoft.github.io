import React from 'react';

import PNavbar from './components/PNavbar.js';
import PContent from './components/PContent.js';
import PFooter from './components/PFooter.js';

import data from './data/translation.json';

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
                 getContext={ this.getContext } />
        <PContent state={ this.state }
                  getContext={ this.getContext } />
        <PFooter state={ this.state }
                 getContext={ this.getContext } />
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
   * @param { string } key - is a json identity.
   * @returns { string } A string that has been translated from data source.
   */
  getContext = (key, pure = false) => {
    let split = key.split('.');
    let obj = this.state.data;
    for (let count = 0; count < split.length; ++count) {
      let current = split[count];
      obj = obj[current];
    }
    if (pure === true) return obj;
    return obj[this.state.language_id];
  }

  /**
   * Update title with corresponding language.
   */
  updateTitle() {
    document.title = this.getContext('Direct.Name') + ' - ' + this.getContext('Direct.Title');
  }
}

export default App;
