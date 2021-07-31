/**
 * $File: navbar.js $
 * $Date: 2021-07-31 18:25:23 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

import React from 'react';
import NavBar from 'react-bootstrap';

import logo from '../logo.png';

import {
  Nav, Navbar, NavDropdown,
  Dropdown,
  Container,
  Button,
} from 'react-bootstrap';

class _Navbar extends React.Component {
  render () {
    return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={ logo } width="32" height="32" />
            { this.props.name }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav className="container-fluid justify-content-end">
              <NavDropdown
                id="nav-dropdown-dark"
                title="🌍 Languages"
                menuVariant="dark">

                <NavDropdown.Item href="">English</NavDropdown.Item>
                <NavDropdown.Item href="">中文</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default _Navbar;
