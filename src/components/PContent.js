/**
 * $File: PContent.js $
 * $Date: 2021-08-01 22:48:24 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';
import PServices from './PServices.js';
import {
  Container, Row, Col,
  Card,
} from 'react-bootstrap';

/**
 * Everything except Navbar and Footer components.
 */
class PContent extends React.Component {
  state = {};
  render () {
    return (
      <Container className="text-center">
        <h2>Services</h2>
        <PServices getContext={ this.props.getContext } />
        <br/>
      </Container>
    );
  }
}

export default PContent;
