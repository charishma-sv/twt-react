import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TweetBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container
        className="p-0 border-0 d-flex ml-0 mr-0 flex-column align-items-stretch "
        style={{
          width: '90%',
          marginBottom: '4px',
          marginTop: '4px',
          fontWeight: '700',
          fontSize: '16px',
        }}
      >
        <Link
          to="#"
          className=" d-flex flex-column align-items-stretch"
          style={{
            paddingLeft: '32px',
            paddingRight: '32px',
            textDecoration: 'none',
            border: '1 solid rgba(0,0,0,0)',
            borderRadius: '9999px',
            backgroundColor: 'rgba(29,161,242)',
            boxShadow: 'rgb(0 0 0 / 8%) 0px 8px 28px',
            outlineStyle: 'none',
            transitionProperty: 'background-color, box-shadow',
            transitionDuration: '0.2s',
            minHeight: '48px',
            height: '0px',
          }}
        >
          <Container
            fluid
            className="p-0 d-flex align-items-center justify-content-center flex-grow-1 mw-100"
            style={{
              flexDirection: 'row',
              color: 'rgb(255,255,255)',
              fontWeight: '700',
              fontSize: '15px',
              lineHeight: '20px',
              overflowWrap: 'break-word',
              minWidth: '0px',
              textAlign: 'center',
            }}
          >
            <span
              className="mw-100"
              style={{ textAlign: 'center', minWidth: '0px', font: 'inherit' }}
            >
              Tweet
            </span>
          </Container>
        </Link>
      </Container>
    );
  }
}

export default TweetBtn;
