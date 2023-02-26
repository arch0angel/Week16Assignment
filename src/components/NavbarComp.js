import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

function NavbarComp() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/home">Website</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
    )
}

export default NavbarComp