/**
 * $File: PContent.js $
 * $Date: 2021-08-01 22:48:24 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';

import ReactHtmlParser from 'react-html-parser';

import {
  Container,
} from 'react-bootstrap';

import { BrowserRouter as Router, Route } from "react-router-dom";

import PHome from './PHome.js';

/**
 * Everything except Navbar and Footer components.
 */
class PContent extends React.Component {
  state = {};
  render () {
    return (
      <Router>
        <Route exact path="/">
          <PHome state={ this.props.state }
                 getContext={ this.props.getContext } />
        </Route>
        <Route path="/legal">
          <Container className="p-5">
            { ReactHtmlParser(this.props.getContext("Legal")) }
          </Container>
        </Route>
        <Route path="/privacy-policy">
          <Container className="p-5">
            { ReactHtmlParser(this.props.getContext("PrivacyPolicy")) }
          </Container>
        </Route>
        <Route path={ process.env.PUBLIC_URL + "/terms-of-use" }>
          <Container className="p-5">
            { ReactHtmlParser(this.props.getContext("TermsOfUse")) }
          </Container>
        </Route>
      </Router>
    );
  }
}

export default PContent;
