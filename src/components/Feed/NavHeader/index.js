import React, { Component } from 'react';
import UserData from './UserData';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

class NavHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container
        fluid
        className=" m-0  d-flex flex-column justify-content-between h-100"
        style={{
          width: '275px',
          overflowY: 'auto',
          paddingLeft: '12px',
          paddingRight: '12px',
        }}
      >
        <Navigation />
        <UserData />
      </Container>

      // <Container className="p-0 m-0 d-flex flex-column align-items-start position-relative">
      //   <Container className="px-2 d-flex flex-column align-items-start">
      //     <Navigation />
      //     <UserData />
      //   </Container>
      // </Container>
    );
  }
}

export default NavHeader;
