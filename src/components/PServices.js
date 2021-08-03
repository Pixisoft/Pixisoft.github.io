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
    let table = [];
    const columnMax = 3;
    let columns = [];
    let services = Object.keys(this.props.state.data.Services);

    for (let count = 1; count <= services.length; ++count) {
      columns.push(services[count - 1]);
      if ((count % columnMax) === 0) {
        table.push (this.renderRow(columns));
        columns = [];
      }
    }

    if (columns.length !== 0) {
      table.push (this.renderRow(columns));
    }

    return (<Container>{ table }</Container>);
  }

  renderRow(columns) {
    return (
      <Row key="_">
        {
          columns.map(service =>
            <Col key="_">
              <Container className="rounded border-top border-primary border-5 shadow m-3 p-3">
                <img alt="GameDev" src={ unity } width="80" />
                <br/><br/>
                <h4>{ this.props.getContext('Services.' + service + '.Title') }</h4>
                { this.props.getContext('Services.' + service + '.Text') }
              </Container>
            </Col>
          )
        }
      </Row>
    );
  }
}

export default PServices;
