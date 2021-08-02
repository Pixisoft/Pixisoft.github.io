/**
 * $File: PNavbar.js $
 * $Date: 2021-07-31 18:25:23 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */
import React from 'react';
import logo from '../images/logo.png';
import {
  Nav, Navbar, NavDropdown,
  Container,
  Button,
} from 'react-bootstrap';

/**
 * Navigation bar at the top of the page.
 */
class PNavbar extends React.Component {
  render () {
    return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h3>
              <img alt="Logo" src={ logo } width="40"/>
              { ' ' + this.props.getContext('Name') }
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark"/>
          <Navbar.Collapse id="navbar-dark">
            <Nav className="container-fluid justify-content-end">
              <Button variant="dark" data-balloon-pos="down"
                      aria-label={ this.props.getContext('TipCompany') }>
                { this.props.getContext('Company') }</Button>
              <Button variant="dark" data-balloon-pos="down"
                      aria-label={ this.props.getContext('TipServices') }>
                { this.props.getContext('Services') }</Button>
              <Button variant="dark" data-balloon-pos="down" disabled
                      aria-label={ this.props.getContext('TipTeam') }>
                { this.props.getContext('Team') }</Button>
              <Button variant="dark" data-balloon-pos="down"
                      aria-label={ this.props.getContext('TipContact') }>
                { this.props.getContext('Contact') }</Button>
              <NavDropdown
                id="nav-dropdown-dark" title="🌍" menuvariant="dark">
                {
                  this.props.state.data.SupportLanguages.map(lan =>
                    <NavDropdown.Item
                      key={ lan }
                      onClick={ () => this.props.setLanguage(lan) }>
                      { lan }
                    </NavDropdown.Item>
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
