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
  Badge,
  Container, Row, Col,
} from 'react-bootstrap';

import { GetServiceIcon } from '../../util/ImgLoader.js';

/**
 * Services section.
 *
 * Here we introduces the software services we provided to our customers.
 */
class PServices extends React.Component {
  state = {
    url: '',
  };

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

    return (
      <Container className="text-center">
        <Row className="p-5">
          <h1>{ this.props.getContext('Direct.Services') }</h1>
          <Container>{ table }</Container>
        </Row>
      </Container>
    );
  }

  renderRow(columns) {
    return (
      <Row key={ columns }>
        { columns.map(service => this.renderColumn(service)) }
        { this.renderColumnsEmpty(columns) }
      </Row>
    );
  }

  renderColumn(service) {
    return (
      <Col key={ service }>
        <Container className="rounded border-top border-primary border-5 shadow m-3 p-3">
          <img alt={ service } src={ GetServiceIcon(service) }
               width="80" />
          <br/><br/>
          <h4>{ this.props.getContext('Services.' + service + '.Title') }</h4>
          { this.props.getContext('Services.' + service + '.Stars', true) }
          <br/>
          { this.props.getContext('Services.' + service + '.Text') }
          <Container className="pt-2 d-flex">
            <Row className="justify-content-start">
              { this.renderBadges(service) }
            </Row>
          </Container>
        </Container>
      </Col>
    );
  }

  renderColumnsEmpty(columns) {
    let diff = 3 - columns.length;
    let table = [];
    for (let count = 0; count < diff; ++count) {
      table.push(this.renderColumnEmpty(count));
    }
    return (<>{ table }</>);
  }

  renderColumnEmpty(key) {
    return (<Col key={ key }></Col>);
  }

  renderBadges(service) {
    let badges = this.props.getContext('Services.' + service + '.Badges');
    return (<>{ badges.map(badge =>
      <Col key={badge} className="p-1">
        <Badge key={ badge }
               className="bg-success rounded-pill">{ badge }</Badge>
      </Col>
    ) }</>);
  }
}

export default PServices;
