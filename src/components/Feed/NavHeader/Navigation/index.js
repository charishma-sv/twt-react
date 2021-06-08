import React from 'react';
import { Container } from 'react-bootstrap';
import SVGBird from './SVGBird';
import NavLinks from './NavLinks';

import TweetBtn from './TweetBtn';

function Navigation() {
  return (
    <Container className="p-0 m-0 d-flex flex-column align-items-start position-relative">
      <SVGBird />
      <NavLinks />
      <TweetBtn />
    </Container>
  );
}

export default Navigation;
