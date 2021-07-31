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
            <h3>
              <img alt="Logo"
                   src={ logo }
                   width="40" height="40" />
              { ' ' + this.props.displayContext('Name') }
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav className="container-fluid justify-content-end">
              <Button variant="dark" aria-label="Whats up!" data-balloon-pos="down">
                { this.props.displayContext('Company') }</Button>
              <Button variant="dark" aria-label="Whats up!" data-balloon-pos="down">
                { this.props.displayContext('Services') }</Button>
              <Button variant="dark" aria-label="Whats up!" data-balloon-pos="down">
                { this.props.displayContext('Team') }</Button>
              <Button variant="dark" aria-label="Whats up!" data-balloon-pos="down">
                { this.props.displayContext('Contact') } </Button>
              <NavDropdown
                id="nav-dropdown-dark" title="🌍 Languages" menuvariant="dark">
                {
                  this.props.state.data.Languages.map(lan =>
                    <NavDropdown.Item onClick={ () => this.props.setLanguage(lan) }>{ lan }</NavDropdown.Item>
                  )
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PNavbar;