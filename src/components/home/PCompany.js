/**
 * $File: PCompany.js $
 * $Date: 2021-08-04 23:31:40 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';

import {
  Container,
  Row, Col,
} from 'react-bootstrap';

import ReactHtmlParser from 'react-html-parser';

class PCompany extends React.Component {
  state = {};
  render () {
    return (
      <Container id="company" className="text-center">
        <Row className="p-4">
          <Col>
            <h1>{ this.props.getContext('Direct.Company') }</h1>
            <div className="blockquote">
              { ReactHtmlParser(this.props.getContext('Company.Intro')) }
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PCompany;
