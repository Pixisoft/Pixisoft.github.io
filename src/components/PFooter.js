/**
 * $File: PFooter.js $
 * $Date: 2021-08-01 17:11:05 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';
import logo from '../images/logo.png';
import github from '../images/icons/github.png';
import {
  Container, Row, Col,
  Button,
} from 'react-bootstrap';

class PFooter extends React.Component {
  state = {
    bGitHub: false,
  };

  render () {
    return (
      <Container fluid className="bg-dark text-white">
        <Container>
          <Row className="justify-content-center">
            <Col className="border border-primary">
              <h1>
                <img alt="Logo" src={ logo } width="80" />
                { ' ' + this.props.getContext('Name') }
              </h1>
              { this.props.getContext('CompanyIntro') }
            </Col>
            <Col className="border border-primary">
              Links
            </Col>
            <Col className="border border-primary text-center p-5">
              <a href="https://github.com/Pixisoft">
                <img alt="GitHub" src={ github } width="50"
                     className={`${this.state.bGitHub ? "animate__animated animate__heartBeat" : ""}`}
                     id="bGitHub"
                     onMouseEnter={ this.bounceEnter }
                     onMouseLeave={ this.bounceLeave }/>
              </a>
              <br/><br/>
              { this.props.getContext('FooterQuote') }
            </Col>
          </Row>
        </Container>
        <Row className="text-center p-3" style={{backgroundColor: "#121416"}}>
          <Col>© 2021 Pixisoft Inc. All rights reserved.</Col>
        </Row>
      </Container>
    );
  }

  bounceEnter = (key) => { this.setState({ [key.target.id]: true }); }
  bounceLeave = (key) => { this.setState({ [key.target.id]: false }); }
}

export default PFooter;
