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
  Container,
} from 'react-bootstrap';

import slide1 from '../../images/slides/1.png';
import slide2 from '../../images/slides/2.png';
import slide3 from '../../images/slides/3.png';

class PCarousel extends React.Component {
  state = {};
  render () {
    return (
      <Container fluid style={{backgroundColor: "#121416"}} className="text-left">
        <Container>
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100"
                   src={ slide1 }
                   alt="First slide"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100"
                   src={ slide2 }
                   alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100"
                   src={ slide3 }
                   alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    );
  }
}

export default PCarousel;
