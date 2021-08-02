/**
 * $File: PFooter.js $
 * $Date: 2021-08-01 17:11:05 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

import React from 'react';
import logo from '../logo.png';
import {
  Container, Row, Col,
  Button,
} from 'react-bootstrap';

class PFooter extends React.Component {
  state = {};
  render () {
    return (
      <Container fluid className="bg-dark text-white">
        <Container>
          <Row className="justify-content-center">
            <Col className="border border-primary">
              <h1>
                <img alt="Logo"
                     src={ logo }
                     width="80" height="80" />
                { ' ' + this.props.getContext('Name') }
              </h1>
              Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit. Egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse!
            </Col>
            <Col className="border border-primary">
              Links
            </Col>
          </Row>
        </Container>
        <Row className="text-center p-3" style={{backgroundColor: "#121416"}}>
          <Col>© 2021 Pixisoft Inc. All rights reserved.</Col>
        </Row>
      </Container>
    );
  }
}

export default PFooter;
