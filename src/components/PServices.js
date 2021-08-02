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
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ unity } />
              <Card.Body className="text-center">
                <Card.Title>
                  { this.props.getContext('GameDevelopment_Title') }
                </Card.Title>
                <Card.Text>
                  { this.props.getContext('GameDevelopment_Text') }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ unity } />
              <Card.Body className="text-center">
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ unity } />
              <Card.Body className="text-center">
                <Card.Title>Tool Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PServices;
