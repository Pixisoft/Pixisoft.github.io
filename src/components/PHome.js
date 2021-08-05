/**
 * $File: PHome.js $
 * $Date: 2021-08-05 19:48:02 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';

import {
  Container,
} from 'react-bootstrap';

import PCompany from './home/PCompany.js';
import PServices from './home/PServices.js';

class PHome extends React.Component {
  state = {};
  render () {
    return (
      <Container>
        <PCompany state={ this.props.state }
                  getContext={ this.props.getContext } />
        <PServices state={ this.props.state }
                   getContext={ this.props.getContext } />
      </Container>
    );
  }
}

export default PHome;
