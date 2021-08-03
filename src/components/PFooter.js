/**
 * $File: PFooter.js $
 * $Date: 2021-08-01 17:11:05 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';

import logo from '../images/logo.png';
import github from '../images/icons/github.png';
import youtube from '../images/icons/youtube.png';
import gmail from '../images/icons/gmail.ico';
import linkedin from '../images/icons/linkedin.png';

/**
 * Information at the very bottom of all pages.
 */
class PFooter extends React.Component {
  state = {
    bGitHub: false,
    bYouTube: false,
    bEmail: false,
    bLinkedIn: false,
  };

  render () {
    return (
      <Container fluid className="bg-dark text-white">
        <Container>
          <Row>
            <Col className="d-none d-lg-block">
              <h1>
                <img alt="Logo" src={ logo } width="80" />
                { ' ' + this.props.getContext('Direct.Name') }
              </h1>
              { this.props.getContext('Company.IntroFooter') }
            </Col>
            <Col className="d-none d-lg-block border border-primary">
              Links
            </Col>
            <Col className="text-center justify-content-center align-self-center">
              <Container>
                <Row className="p-4">
                  <Col>
                    <a href="https://github.com/Pixisoft">
                      <img alt="GitHub" src={ github } width="50"
                           className={`${this.state.bGitHub ? "animate__animated animate__heartBeat" : ""}`}
                           id="bGitHub"
                           onMouseEnter={ this.bounceEnter }
                           onMouseLeave={ this.bounceLeave }/>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.youtube.com/channel/UCadVGsQF8C1qH7RY7bRcpgw">
                      <img alt="YouTube" src={ youtube } width="50"
                           className={`${this.state.bYouTube ? "animate__animated animate__heartBeat" : ""}`}
                           id="bYouTube"
                           onMouseEnter={ this.bounceEnter }
                           onMouseLeave={ this.bounceLeave }/>
                    </a>
                  </Col>
                  <Col>
                    <a href="mailto:pixisoft.tw@gmail.com">
                      <img alt="Gmail" src={ gmail } width="50"
                           className={`${this.state.bEmail ? "animate__animated animate__heartBeat" : ""}`}
                           id="bEmail"
                           onMouseEnter={ this.bounceEnter }
                           onMouseLeave={ this.bounceLeave }/>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.linkedin.com/in/jen-chieh-shen-17a02780/">
                      <img alt="LinkedIn" src={ linkedin } width="50"
                           className={`${this.state.bLinkedIn ? "animate__animated animate__heartBeat" : ""}`}
                           id="bLinkedIn"
                           onMouseEnter={ this.bounceEnter }
                           onMouseLeave={ this.bounceLeave }/>
                    </a>
                  </Col>
                </Row>
                <Row className="p-1">
                  <Col className="text-center justify-content-center align-self-center">
                    { this.props.getContext('FooterQuote') }
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Row className="text-center p-3" style={{backgroundColor: "#121416"}}>
          <Col>{ this.props.getContext('Copyright') }</Col>
        </Row>
      </Container>
    );
  }

  bounceEnter = (key) => { this.setState({ [key.target.id]: true }); }
  bounceLeave = (key) => { this.setState({ [key.target.id]: false }); }
}

export default PFooter;
