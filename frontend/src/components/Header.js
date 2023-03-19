import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navBarStyle = {
  backgroundColor: 'lightBlue',
};

const Header = (props) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
