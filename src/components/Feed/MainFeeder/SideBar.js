import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container
        className=" common-style mr-10"
        style={{ width: '350px' }}
      ></Container>
    );
  }
}

export default SideBar;
