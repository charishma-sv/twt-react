import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import TweetsBar from './TweetsBar';
import SideBar from './SideBar';

class MainFeeder extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container
        className="common-style flex-shrink-1 flex-grow-1 "
        style={{ width: '990px' }}
      >
        <Container className="common-style flex-grow-1">
          <Container
            className="common-style flex-row align-items-stretch justify-content-space-between w-100"
            style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '100%' }}
          >
            <TweetsBar
              tweets={this.props.tweets}
              updateTweets={this.props.updateTweets}
              deleteTweet={this.props.deleteTweet}
            />
            <SideBar />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default MainFeeder;
