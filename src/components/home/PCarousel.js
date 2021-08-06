/**
 * $File: PCarousel.js $
 * $Date: 2021-08-06 21:24:42 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';

import {
  Carousel,
  Container, Row, Col,
} from 'react-bootstrap';

import slide1 from '../../images/slides/1.png';
import slide2 from '../../images/slides/2.png';
import slide3 from '../../images/slides/3.png';

import title from '../../images/title.png';

class PCarousel extends React.Component {
  state = {};
  render () {
    return (
      <Container fluid style={{backgroundColor: "#121416"}}>
        <Container>
          <Row className="p-4">
            <Col xs lg="4" className="justify-content-center align-self-center">
              <Container fluid className="text-light text-left">
                <Row>
                  <Col>
                    <h1><img src={ title } alt="title"/></h1>
                    <h4 className="text-secondary">
                      { this.props.getContext("Carousel.Quote") }
                    </h4>
                    { this.props.getContext("Carousel.Text") }
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="d-none d-lg-block">
              <Carousel fade>
                <Carousel.Item>
                  <img className="d-block w-100"
                       src={ slide1 }
                       alt="Slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100"
                       src={ slide2 }
                       alt="Slide2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100"
                       src={ slide3 }
                       alt="Slide3" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default PCarousel;
