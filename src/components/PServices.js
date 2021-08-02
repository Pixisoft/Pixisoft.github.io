/**
 * $File: PServices.js $
 * $Date: 2021-08-03 01:22:41 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';
import {
  Container, Row, Col,
  Card,
} from 'react-bootstrap';

import unity from '../images/services/unity.png';

/**
 * Services section.
 *
 * Here we introduces the software services we provided to our customers.
 */
class PServices extends React.Component {
  state = {};
  render () {
    return (
      <Container className="d-flex justify-content-center">
        <Row>
          <Col className="border border-primary">
            <img alt="GameDev" src={ unity } width="80" />
            <br/><br/>
            <h4>{ this.props.getContext('GameDevelopment_Title') }</h4>
            { this.props.getContext('GameDevelopment_Text') }
          </Col>
          <Col>
            <img alt="GameDev" src={ unity } width="80" />
            <br/><br/>
            <h4>{ this.props.getContext('GameDevelopment_Title') }</h4>
            { this.props.getContext('GameDevelopment_Text') }
          </Col>
          <Col>
            <img alt="GameDev" src={ unity } width="80" />
            <br/><br/>
            <h4>{ this.props.getContext('GameDevelopment_Title') }</h4>
            { this.props.getContext('GameDevelopment_Text') }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PServices;
