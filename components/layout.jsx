import React from 'react';
import NextLink from 'next/link';
import { Navbar, Nav, Button } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><NextLink href="/" passHref>EVault</NextLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NextLink href="/" passHref>
              Home
            </NextLink>
          </Nav>
          <Nav>
            <Button
              variant="primary"
              className="mr-2"
              as={NextLink}
              href="/login"
              passHref
            >
              Login
            </Button>
            <Button variant="success" as={NextLink} href="/register" passHref>
              SignUp
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-5">
        <div className="py-3">{children}</div>
      </div>
      <div
        style={{
          backgroundColor: 'darkgray',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
        }}
      >
        Endbar content goes here
      </div>
    </div>
  );
}

export default Layout;
