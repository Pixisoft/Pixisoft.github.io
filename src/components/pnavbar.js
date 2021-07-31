/**
 * $File: navbar.js $
 * $Date: 2021-07-31 18:25:23 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

import React from 'react';

import logo from '../logo.png';

import {
  Nav, Navbar, NavDropdown,
  Container,
  Button,
} from 'react-bootstrap';

class PNavbar extends React.Component {
  render () {
    return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="Logo"
                 src={ logo }
                 width="32" height="32" />
            { this.props.name }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav className="container-fluid justify-content-end">
              <Button variant="dark">Primary</Button>
              <NavDropdown
                id="nav-dropdown-dark" title="🌍 Languages" menuvariant="dark">
                <NavDropdown.Item onClick={ () => this.props.setLanguage(0) }>English</NavDropdown.Item>
                <NavDropdown.Item onClick={ () => this.props.setLanguage(1) }>中文</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PNavbar;
