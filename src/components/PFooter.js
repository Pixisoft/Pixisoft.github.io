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
  Nav, Navbar, NavDropdown,
  Container, Row, Col,
  Button,
} from 'react-bootstrap';

class PFooter extends React.Component {
  state = {};
  render () {
    return (
      <Container fluid className="bg-dark text-white">
        <Row className="justify-content-center">
          <Col md={{ offset: 1 }}
               className="border border-primary">
            <h3>
              <img alt="Logo"
                   src={ logo }
                   width="40" height="40" />
              { ' ' + this.props.getContext('Name') }
            </h3>
          </Col>
          <Col className="border border-primary">
            Links
          </Col>
        </Row>
        <Row className="text-center p-3" style={{backgroundColor: "#121416"}}>
          <Col>© 2021 Pixisoft Inc. All rights reserved.</Col>
        </Row>
      </Container>
    );
  }
}

export default PFooter;
