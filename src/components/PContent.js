/**
 * $File: PContent.js $
 * $Date: 2021-08-01 22:48:24 $
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

/**
 * Everything except Navbar and Footer components.
 */
class PContent extends React.Component {
  state = {};
  render () {
    return (
      <Container className="text-center">
        <PCompany state={ this.props.state }
                  getContext={ this.props.getContext } />
        <PServices state={ this.props.state }
                   getContext={ this.props.getContext } />
      </Container>
    );
  }
}

export default PContent;
